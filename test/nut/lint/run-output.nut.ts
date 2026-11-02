import { expect } from 'chai';
import { findFixture, execLintText } from '../run.ts';

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

    it('reports nothing for a project within the limit of files', () => {
        const directory = findFixture('max-files-within-limit-project');
        const text = execLintText({
            directory,
        });

        expect(text).to.include('0 errors, 0 warnings.');
    });
});
