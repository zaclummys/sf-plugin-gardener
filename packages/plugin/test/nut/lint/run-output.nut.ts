import { expect } from 'chai';
import { execLintText, findFixture } from '@sf-plugin-gardener/testkit';

describe('lint run output', () => {
    it('ends with the number of errors and warnings', () => {
        const directory = findFixture('empty-project');
        const text = execLintText({
            directory,
        });

        expect(text).to.include('0 errors, 0 warnings.');
    });

    it('counts the errors that the rules report', () => {
        const directory = findFixture('max-files-project');
        const text = execLintText({
            directory,
        }, {
            exitCode: 1,
        });

        expect(text).to.include('1 errors, 0 warnings.');
    });
});
