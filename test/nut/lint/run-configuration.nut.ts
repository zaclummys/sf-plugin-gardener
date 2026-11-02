import { expect } from 'chai';
import { findFixture, execLintJson } from '../run.ts';

describe('lint run configuration', () => {
    it('fails when the project has no configuration file', () => {
        const directory = findFixture('unconfigured-project');
        const output = execLintJson({
            directory,
            exitCode: 1,
        });

        expect(output).to.include({
            name: 'configuration-not-found',
        });
    });

    it('fails when the configuration file is not valid JSON', () => {
        const directory = findFixture('invalid-configuration-project');
        const output = execLintJson({
            directory,
            exitCode: 1,
        });

        expect(output).to.include({
            name: 'invalid-configuration',
        });
    });

    it('fails when the configuration file is not a JSON object', () => {
        const directory = findFixture('array-configuration-project');
        const output = execLintJson({
            directory,
            exitCode: 1,
        });

        expect(output).to.include({
            name: 'invalid-configuration',
        });
    });

    it('fails when the rules of the configuration are not an object', () => {
        const directory = findFixture('invalid-rules-project');
        const output = execLintJson({
            directory,
            exitCode: 1,
        });

        expect(output).to.include({
            name: 'invalid-configuration',
        });
    });
});
