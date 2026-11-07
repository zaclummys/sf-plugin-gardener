import { expect } from 'chai';
import { execLintJson, findFixture } from '@sf-plugin-gardener/testkit';

describe('lint run result', () => {
    it('includes the file of a finding that has one', () => {
        const directory = findFixture('file-finding-project');
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

    it('counts a file that declares no apiVersion', () => {
        const directory = findFixture('unversioned-project');
        const output = execLintJson({
            directory,
        });

        expect(output.result.files).to.equal(1);
    });

    it('counts a component without its children', () => {
        const directory = findFixture('parent-project');
        const output = execLintJson({
            directory,
        });

        expect(output.result.files).to.equal(1);
    });
});
