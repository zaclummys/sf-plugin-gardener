import { expect } from 'chai';
import { PicklistRestrictedRule } from '../../../lib/rules/index.js';
import { buildFieldFiles } from './build-field-files.ts';

const rule = new PicklistRestrictedRule({
    severity: 'error',
});

function buildPicklist({
    type, restricted,
}: {
    type: string;
    restricted: string | null;
}) {
    return {
        name: 'Sample__c.Status__c',
        path: 'force-app/Status__c.field-meta.xml',
        content: {
            type,
            valueSet: {
                restricted,
            },
        },
    };
}

describe('PicklistRestrictedRule', () => {
    it('reports the picklist that declares no restricted', () => {
        const findings = rule.check(buildFieldFiles([
            buildPicklist({
                type: 'Picklist',
                restricted: null,
            }),
        ]));

        expect(findings.map((finding) => finding.getMessage())).to.deep.equal(['The picklist Sample__c.Status__c is not restricted to its values.']);
    });

    it('reports the picklist whose restricted is false', () => {
        const findings = rule.check(buildFieldFiles([
            buildPicklist({
                type: 'Picklist',
                restricted: 'false',
            }),
        ]));

        expect(findings).to.have.lengthOf(1);
    });

    it('reports the multiselect picklist that declares no restricted', () => {
        const findings = rule.check(buildFieldFiles([
            buildPicklist({
                type: 'MultiselectPicklist',
                restricted: null,
            }),
        ]));

        expect(findings).to.have.lengthOf(1);
    });

    it('reports nothing for a picklist whose restricted is true', () => {
        const findings = rule.check(buildFieldFiles([
            buildPicklist({
                type: 'Picklist',
                restricted: 'true',
            }),
        ]));

        expect(findings).to.deep.equal([]);
    });

    it('reports nothing for a field that is not a picklist', () => {
        const findings = rule.check(buildFieldFiles([
            buildPicklist({
                type: 'Text',
                restricted: null,
            }),
        ]));

        expect(findings).to.deep.equal([]);
    });

    it('reports the file of the picklist, with its name and severity', () => {
        const [finding] = rule.check(buildFieldFiles([
            buildPicklist({
                type: 'Picklist',
                restricted: null,
            }),
        ]));

        expect(finding).to.deep.include({
            rule: 'custom-field/picklist-restricted',
            severity: 'error',
            file: 'force-app/Status__c.field-meta.xml',
        });
    });
});
