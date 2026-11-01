import { expect } from 'chai';
import { fixture, lint } from '../run.ts';

type LintRunResult = {
    projects: number;
    files: number;
    findings: unknown[];
};

describe('lint run', () => {
    it('reports no findings for a project without metadata', () => {
        const directory = fixture('empty-project');
        const output = lint<LintRunResult>(`--directory ${directory} --json`, 0);
        const result = output.jsonOutput?.result;

        expect(result).to.deep.equal({
            projects: 1,
            files: 0,
            findings: [],
        });
    });
});
