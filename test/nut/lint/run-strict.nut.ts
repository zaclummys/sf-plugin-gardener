import { expect } from 'chai';
import { execLintText, findFixture } from '../run.ts';

describe('lint run strict', () => {
    it('fails when the project has warnings', () => {
        const directory = findFixture('max-files-warning-project');
        const text = execLintText({
            directory,
            strict: true,
        }, {
            exitCode: 1,
        });

        expect(text).to.include('1 warnings.');
    });
});
