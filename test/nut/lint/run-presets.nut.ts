import { expect } from 'chai';
import { findFixture, lint } from '../run.ts';

describe('lint run presets', () => {
    it('fails when the configuration extends a preset that does not exist', () => {
        const directory = findFixture('unknown-preset-project');
        const output = lint({
            directory,
            exitCode: 1,
        });

        expect(output).to.include({
            name: 'preset-not-found',
        });
    });

    it('accepts the recommended preset', () => {
        const directory = findFixture('recommended-project');
        const output = lint({
            directory,
        });

        expect(output).to.deep.include({
            result: {
                files: 0,
                findings: [],
            },
        });
    });
});
