import { expect } from 'chai';
import { execLintJson, findFixture } from '@sf-plugin-gardener/testkit';

describe('lint run project/max-size', () => {
    it('reports an error when the project is above the size limit', () => {
        const directory = findFixture('max-size-project');
        const output = execLintJson({
            directory,
        }, {
            exitCode: 1,
        });

        expect(output.result.findings).to.deep.equal([
            {
                rule: 'project/max-size',
                severity: 'error',
                message: 'The project is larger than 0.00001 MB.',
            },
        ]);
    });
});
