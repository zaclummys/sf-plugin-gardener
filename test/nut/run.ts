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
    exitCode?: number | 'nonZero';
};

/**
 * Runs `sf lint run` and returns the result of its JSON output.
 *
 * @param directory The directory to lint.
 * @param strict Treats warnings as errors.
 * @param exitCode The exit code the command must end with. Defaults to 0.
 */
export function lint(options: LintOptions) {
    const output = execLint(options);
    const json = output.jsonOutput;

    return json?.result;
}

/**
 * Runs `sf lint run`, expects it to fail and returns the name of the error.
 *
 * @param directory The directory to lint.
 * @param strict Treats warnings as errors.
 * @param exitCode The exit code the command must end with. Defaults to 1.
 */
export function lintFailing(options: LintOptions) {
    const output = execLint({
        exitCode: 1,
        ...options,
    });
    const json = output.jsonOutput;

    return json?.name;
}

function execLint(options: LintOptions) {
    const args = [
        'lint',
        'run',
        '--directory',
        `"${options.directory}"`,
        '--json',
    ];

    if (options.strict) {
        args.push('--strict');
    }

    return execCmd<LintRunResult>(args.join(' '), {
        ensureExitCode: options.exitCode ?? 0,
        cwd: tmpdir(),
    });
}

/** Creates an empty temporary directory, with no project in it or above it. */
export function makeEmptyDirectory(): string {
    return mkdtempSync(path.join(tmpdir(), 'lint-nut-'));
}
