import { mkdtempSync } from 'node:fs';
import path from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { execCmd } from '@salesforce/cli-plugins-testkit';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

/**
 * Returns the absolute path of a fixture project.
 *
 * @param name The directory name under test/fixtures.
 */
export function findFixture(name: string): string {
    return path.join(repoRoot, 'test', 'fixtures', name);
}

type LintRunResult = {
    files: number;
    findings: unknown[];
};

type LintOptions = {
    directory: string;
    strict?: boolean;
};

type LintExpectation = {
    exitCode?: number | 'nonZero';
};

function execLint(options: LintOptions, expectation: LintExpectation, flags: string[]) {
    const args = [
        'lint',
        'run',
        '--directory',
        `"${options.directory}"`,
        ...flags,
    ];

    if (options.strict) {
        args.push('--strict');
    }

    return execCmd<LintRunResult>(args.join(' '), {
        ensureExitCode: expectation.exitCode ?? 0,
        cwd: tmpdir(),
    });
}

/**
 * Runs `sf lint run` and returns its JSON output.
 *
 * @param options.directory The directory to lint.
 * @param options.strict Treats warnings as errors.
 * @param expectation.exitCode The exit code the command must end with. Defaults to 0.
 */
export function execLintJson(options: LintOptions, expectation: LintExpectation = {}) {
    const output = execLint(options, expectation, ['--json']);
    const json = output.jsonOutput;

    if (!json) {
        throw new Error('The command did not print a JSON output.');
    }

    return json;
}

/**
 * Runs `sf lint run` and returns what it prints in the human format.
 *
 * @param options.directory The directory to lint.
 * @param options.strict Treats warnings as errors.
 * @param expectation.exitCode The exit code the command must end with. Defaults to 0.
 */
export function execLintText(options: LintOptions, expectation: LintExpectation = {}) {
    const output = execLint(options, expectation, []);

    return output.shellOutput.stdout;
}

/** Creates an empty temporary directory, with no project in it or above it. */
export function makeEmptyDirectory(): string {
    return mkdtempSync(path.join(tmpdir(), 'lint-nut-'));
}
