import path from 'node:path';
import { expect } from 'chai';
import { findFixture, lint, lintFailing, makeEmptyDirectory } from '../run.ts';

describe('lint run', () => {
    it('reports no findings for a project without metadata', () => {
        const directory = findFixture('empty-project');
        const result = lint({ directory });

        expect(result).to.deep.equal({
            files: 0,
            findings: [],
        });
    });

    it('finds the project above the directory', () => {
        const directory = path.join(findFixture('empty-project'), 'force-app');
        const result = lint({ directory });

        expect(result).to.deep.equal({
            files: 0,
            findings: [],
        });
    });

    it('fails when there is no project above the directory', () => {
        const directory = makeEmptyDirectory();
        const name = lintFailing({ directory });

        expect(name).to.equal('ProjectNotFoundError');
    });
});
