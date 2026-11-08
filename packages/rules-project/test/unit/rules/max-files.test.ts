import { expect } from 'chai';
import { buildComponentFiles } from '@sf-plugin-gardener/testkit';
import { MaxFilesRule } from '../../../lib/rules/index.js';
import { buildProjectFiles, describeFile } from './build-project-files.ts';

const rule = new MaxFilesRule({
    severity: 'warn',
    max: 1,
});

const first = describeFile({
    path: 'force-app/First.flow-meta.xml',
    size: 1,
});

const second = describeFile({
    path: 'force-app/Second.flow-meta.xml',
    size: 1,
});

describe('MaxFilesRule', () => {
    it('reports the project that has more files than the maximum', () => {
        const findings = rule.check(buildProjectFiles([
            first,
            second,
        ]));

        expect(findings.map((finding) => finding.getMessage())).to.deep.equal(['The project has more than 1 files.']);
    });

    it('reports nothing for a project with as many files as the maximum', () => {
        expect(rule.check(buildProjectFiles([first]))).to.deep.equal([]);
    });

    it('does not count the children of a file', () => {
        const findings = rule.check(buildProjectFiles([
            first,
            {
                ...second,
                child: true,
            },
        ]));

        expect(findings).to.deep.equal([]);
    });

    it('reads the files from the components', () => {
        const findings = rule.run(buildComponentFiles([
            {
                name: 'First',
                type: 'Flow',
                path: 'force-app/First.flow-meta.xml',
                content: {},
            },
            {
                name: 'Second',
                type: 'Flow',
                path: 'force-app/Second.flow-meta.xml',
                content: {},
            },
        ]));

        expect(findings).to.have.lengthOf(1);
    });

    it('reports about the project, with its name and severity', () => {
        const [finding] = rule.check(buildProjectFiles([
            first,
            second,
        ]));

        expect(finding).to.deep.include({
            rule: 'project/max-files',
            severity: 'warn',
            file: null,
        });
    });
});
