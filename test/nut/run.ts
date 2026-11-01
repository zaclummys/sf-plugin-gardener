import path from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { execCmd } from '@salesforce/cli-plugins-testkit';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

export function fixture(name: string): string {
    return path.join(repoRoot, 'test', 'fixtures', name);
}

export function lint<T>(args: string, ensureExitCode: number | 'nonZero') {
    return execCmd<T>(`lint run ${args}`, {
        ensureExitCode,
        cwd: tmpdir(),
    });
}
