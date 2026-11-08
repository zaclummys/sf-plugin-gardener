import { expect } from 'chai';
import { readRule } from '@sf-plugin-gardener/testkit';
import { projectRules } from '../../../lib/rules/index.js';

function readName(name: string, entry: unknown): string | null {
    const rule = readRule({
        schemas: projectRules,
        name,
        entry,
    });

    return rule?.getName() ?? null;
}

describe('project rule schemas', () => {
    it('reads max-files from a severity and a maximum', () => {
        expect(readName('project/max-files', {
            severity: 'error',
            max: 10,
        })).to.equal('project/max-files');
    });

    it('rejects max-files without a maximum', () => {
        expect(readName('project/max-files', {
            severity: 'error',
        })).to.equal(null);
    });

    it('reads max-size from a severity and a maximum in megabytes', () => {
        expect(readName('project/max-size', {
            severity: 'warn',
            maxInMegabytes: 39,
        })).to.equal('project/max-size');
    });

    it('reads min-api-version from a severity and a minimum version', () => {
        expect(readName('project/min-api-version', {
            severity: 'error',
            minVersion: '65.0',
        })).to.equal('project/min-api-version');
    });

    it('rejects min-api-version with a version that is not a number', () => {
        expect(readName('project/min-api-version', {
            severity: 'error',
            minVersion: 'latest',
        })).to.equal(null);
    });

    it('reads max-api-version from a severity and a maximum version', () => {
        expect(readName('project/max-api-version', {
            severity: 'error',
            maxVersion: '63.0',
        })).to.equal('project/max-api-version');
    });

    it('rejects max-api-version without a maximum version', () => {
        expect(readName('project/max-api-version', {
            severity: 'error',
        })).to.equal(null);
    });
});
