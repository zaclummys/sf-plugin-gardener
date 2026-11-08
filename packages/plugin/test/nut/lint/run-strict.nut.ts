import { expect } from 'chai';
import { execLintJson, findFixture } from '@sf-plugin-gardener/testkit';

describe('lint run strict', () => {
    it('fails when the project has warnings', () => {
        const directory = findFixture('max-files-warning-project');
        const output = execLintJson({
            directory,
            strict: true,
        }, {
            exitCode: 1,
        });

        expect(output.result.findings).to.have.lengthOf(1);
    });
});
