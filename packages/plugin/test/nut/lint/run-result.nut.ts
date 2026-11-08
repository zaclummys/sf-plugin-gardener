import { expect } from 'chai';
import { execLintJson, findFixture } from '../run.ts';

describe('lint run result', () => {
    it('includes the file of a finding that has one', () => {
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

    it('measures the size of the files when a rule asks for it', () => {
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

    it('counts a component without its children', () => {
        const directory = findFixture('parent-project');
        const output = execLintJson({
            directory,
        });

        expect(output.result.files).to.equal(1);
    });
});
