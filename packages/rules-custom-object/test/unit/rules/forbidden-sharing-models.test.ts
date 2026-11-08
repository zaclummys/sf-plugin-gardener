import { expect } from 'chai';
import { ForbiddenSharingModelsRule } from '../../../lib/rules/index.js';
import { SharingModel } from '../../../lib/metadata/index.js';
import { SharingModels } from '../../../lib/metadata/index.js';
import { buildObjectFiles } from './build-object-files.ts';

const rule = new ForbiddenSharingModelsRule({
    severity: 'error',
    forbiddenModels: new SharingModels({
        models: [new SharingModel('ReadWrite')],
    }),
});

function buildObject(content: unknown) {
    return {
        name: 'Sample__c',
        path: 'force-app/Sample__c.object-meta.xml',
        content,
    };
}

describe('ForbiddenSharingModelsRule', () => {
    it('reports the object whose sharingModel is forbidden', () => {
        const findings = rule.check(buildObjectFiles([
            buildObject({
                sharingModel: 'ReadWrite',
            }),
        ]));

        expect(findings.map((finding) => finding.getMessage())).to.deep.equal(['The object Sample__c has the forbidden sharingModel ReadWrite.']);
    });

    it('reports nothing for an object whose sharingModel is not forbidden', () => {
        const findings = rule.check(buildObjectFiles([
            buildObject({
                sharingModel: 'Private',
            }),
        ]));

        expect(findings).to.deep.equal([]);
    });

    it('reports nothing for an object that declares no sharingModel', () => {
        expect(rule.check(buildObjectFiles([buildObject({})]))).to.deep.equal([]);
    });

    it('reports the file of the object, with its name and severity', () => {
        const [finding] = rule.check(buildObjectFiles([
            buildObject({
                sharingModel: 'ReadWrite',
            }),
        ]));

        expect(finding).to.deep.include({
            rule: 'custom-object/forbidden-sharing-models',
            severity: 'error',
            file: 'force-app/Sample__c.object-meta.xml',
        });
    });
});
