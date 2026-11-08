import { expect } from 'chai';
import { MaxSizeRule } from '../../../lib/rules/max-size.js';
import { buildProjectFiles, describeFile } from './build-project-files.ts';

const megabyte = 1_048_576;

const rule = new MaxSizeRule({
    severity: 'error',
    maxInMegabytes: 1,
});

const half = describeFile({
    path: 'force-app/Half.flow-meta.xml',
    size: megabyte / 2,
});

describe('MaxSizeRule', () => {
    it('reports the project whose files sum above the maximum', () => {
        const findings = rule.check(buildProjectFiles([
            half,
            half,
            half,
        ]));

        expect(findings.map((finding) => finding.getMessage())).to.deep.equal(['The project is larger than 1 MB.']);
    });

    it('reports nothing for a project whose files sum to the maximum', () => {
        const findings = rule.check(buildProjectFiles([
            half,
            half,
        ]));

        expect(findings).to.deep.equal([]);
    });

    it('reports about the project, with its name and severity', () => {
        const [finding] = rule.check(buildProjectFiles([
            describeFile({
                path: 'force-app/Large.flow-meta.xml',
                size: megabyte + 1,
            }),
        ]));

        expect(finding).to.deep.include({
            rule: 'project/max-size',
            severity: 'error',
            file: null,
        });
    });
});
