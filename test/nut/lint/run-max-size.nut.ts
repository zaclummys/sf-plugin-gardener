import { expect } from 'chai';
import { execLintText, findFixture } from '../run.ts';

describe('lint run project/max-size', () => {
    it('reports an error when the project is above the size limit', () => {
        const directory = findFixture('max-size-project');
        const text = execLintText({
            directory,
        }, {
            exitCode: 1,
        });

        expect(text).to.include('1 errors, 0 warnings.');
    });

    it('reports nothing when the project is within the size limit', () => {
        const directory = findFixture('max-size-within-limit-project');
        const text = execLintText({
            directory,
        });

        expect(text).to.include('0 errors, 0 warnings.');
    });
});
