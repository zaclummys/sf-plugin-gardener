import { expect } from 'chai';
import { ApiVersion } from '../../../lib/metadata/index.js';
import { MinApiVersionRule } from '../../../lib/rules/index.js';
import { buildProjectFiles, describeFile, describeVersionedFile } from './build-project-files.ts';

const rule = new MinApiVersionRule({
    severity: 'error',
    minVersion: ApiVersion.from('65.0'),
});

describe('MinApiVersionRule', () => {
    it('reports the file whose apiVersion is below the minimum', () => {
        const findings = rule.check(buildProjectFiles([
            describeVersionedFile({
                path: 'force-app/Old.flow-meta.xml',
                apiVersion: '64.0',
            }),
        ]));

        expect(findings.map((finding) => finding.getMessage())).to.deep.equal(['The apiVersion 64.0 is below the minimum 65.0.']);
    });

    it('reports nothing for a file whose apiVersion is the minimum', () => {
        const findings = rule.check(buildProjectFiles([
            describeVersionedFile({
                path: 'force-app/Current.flow-meta.xml',
                apiVersion: '65.0',
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
                path: 'force-app/Old.flow-meta.xml',
                apiVersion: '64.0',
            }),
        ]));

        expect(finding).to.deep.include({
            rule: 'project/min-api-version',
            severity: 'error',
            file: 'force-app/Old.flow-meta.xml',
        });
    });
});
