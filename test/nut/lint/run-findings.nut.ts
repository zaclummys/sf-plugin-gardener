import { expect } from 'chai';
import { execLintJson, findFixture } from '../run.ts';

describe('lint run findings', () => {
    it('reports the findings in the JSON result', () => {
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
});
