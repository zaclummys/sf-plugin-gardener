import { expect } from 'chai';
import { ApiVersion } from '../../../lib/metadata/api-version.js';
import { MaxApiVersionRule } from '../../../lib/rules/max-api-version.js';
import { buildProjectFiles, describeFile, describeVersionedFile } from './build-project-files.ts';

const rule = new MaxApiVersionRule({
    severity: 'error',
    maxVersion: ApiVersion.from('63.0'),
});

describe('MaxApiVersionRule', () => {
    it('reports the file whose apiVersion is above the maximum', () => {
        const findings = rule.check(buildProjectFiles([
            describeVersionedFile({
                path: 'force-app/New.flow-meta.xml',
                apiVersion: '64.0',
            }),
        ]));

        expect(findings.map((finding) => finding.getMessage())).to.deep.equal(['The apiVersion 64.0 is above the maximum 63.0.']);
    });

    it('reports nothing for a file whose apiVersion is the maximum', () => {
        const findings = rule.check(buildProjectFiles([
            describeVersionedFile({
                path: 'force-app/Current.flow-meta.xml',
                apiVersion: '63.0',
            }),
        ]));

        expect(findings).to.deep.equal([]);
    });

    it('reports nothing for a file that declares no apiVersion', () => {
        const findings = rule.check(buildProjectFiles([
            describeFile({
                path: 'force-app/Unversioned.flow-meta.xml',
                size: 1,
            }),
        ]));

        expect(findings).to.deep.equal([]);
    });

    it('reports the file, with the name and severity of the rule', () => {
        const [finding] = rule.check(buildProjectFiles([
            describeVersionedFile({
                path: 'force-app/New.flow-meta.xml',
                apiVersion: '64.0',
            }),
        ]));

        expect(finding).to.deep.include({
            rule: 'project/max-api-version',
            severity: 'error',
            file: 'force-app/New.flow-meta.xml',
        });
    });
});
