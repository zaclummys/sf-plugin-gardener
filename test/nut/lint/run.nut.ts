import path from 'node:path';
import { expect } from 'chai';
import { findFixture, execLintJson, makeEmptyDirectory } from '../run.ts';

describe('lint run project', () => {
    it('reports no findings for a project without metadata', () => {
        const directory = findFixture('empty-project');
        const output = execLintJson({
            directory,
        });

        expect(output).to.deep.include({
            result: {
                files: 0,
                findings: [],
            },
        });
    });

    it('finds the project above the directory', () => {
        const directory = path.join(findFixture('empty-project'), 'force-app');
        const output = execLintJson({
            directory,
        });

        expect(output).to.deep.include({
            result: {
                files: 0,
                findings: [],
            },
        });
    });

    it('fails when there is no project above the directory', () => {
        const directory = makeEmptyDirectory();
        const output = execLintJson({
            directory,
        }, {
            exitCode: 1,
        });

        expect(output).to.include({
            name: 'project-not-found',
        });
    });

    it('counts only the metadata files that are linted', () => {
        const directory = findFixture('metadata-project');
        const output = execLintJson({
            directory,
        });

        expect(output).to.deep.include({
            result: {
                files: 1,
                findings: [],
            },
        });
    });

    it('fails when a package directory does not exist', () => {
        const directory = findFixture('missing-package-directory-project');
        const output = execLintJson({
            directory,
        }, {
            exitCode: 1,
        });

        expect(output).to.include({
            name: 'package-directory-not-found',
        });
    });
});
