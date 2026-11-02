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
});
