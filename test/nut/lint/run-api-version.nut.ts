import { expect } from 'chai';
import { execLintJson, findFixture } from '../run.ts';

describe('lint run api version', () => {
    it('reports the file with an apiVersion below the minimum', () => {
        const directory = findFixture('min-api-version-project');
        const output = execLintJson({
            directory,
        }, {
            exitCode: 1,
        });

        expect(output.result.findings).to.deep.equal([
            {
                rule: 'project/min-api-version',
                severity: 'error',
                message: 'The apiVersion 64.0 is below the minimum 65.0.',
                file: 'force-app/main/default/flows/Sample.flow-meta.xml',
            },
        ]);
    });

    it('reports the file with an apiVersion above the maximum', () => {
        const directory = findFixture('max-api-version-project');
        const output = execLintJson({
            directory,
        }, {
            exitCode: 1,
        });

        expect(output.result.findings).to.deep.equal([
            {
                rule: 'project/max-api-version',
                severity: 'error',
                message: 'The apiVersion 64.0 is above the maximum 63.0.',
                file: 'force-app/main/default/flows/Sample.flow-meta.xml',
            },
        ]);
    });
});
