import { expect } from 'chai';
import { execLintJson, findFixture } from '@sf-plugin-gardener/testkit';

describe('lint run findings', () => {
    it('reports the findings of a warning in the JSON result', () => {
        const directory = findFixture('max-files-warning-project');
        const output = execLintJson({
            directory,
        });

        expect(output.result.findings).to.deep.equal([
            {
                rule: 'project/max-files',
                severity: 'warn',
                message: 'The project has more than 1 files.',
            },
        ]);
    });

    it('reports the findings of an error in the JSON result', () => {
        const directory = findFixture('max-files-project');
        const output = execLintJson({
            directory,
        }, {
            exitCode: 1,
        });

        expect(output.result.findings).to.deep.equal([
            {
                rule: 'project/max-files',
                severity: 'error',
                message: 'The project has more than 1 files.',
            },
        ]);
    });

    it('reports no findings for a project within the limit of files', () => {
        const directory = findFixture('max-files-within-limit-project');
        const output = execLintJson({
            directory,
        });

        expect(output.result.findings).to.deep.equal([]);
    });
});
