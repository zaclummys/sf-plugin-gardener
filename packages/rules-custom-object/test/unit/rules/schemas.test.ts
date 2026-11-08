import { expect } from 'chai';
import { readRule } from '@sf-plugin-gardener/testkit';
import { customObjectRules } from '../../../lib/rules/index.js';

function readName(name: string, entry: unknown): string | null {
    const rule = readRule({
        schemas: customObjectRules,
        name,
        entry,
    });

    return rule?.getName() ?? null;
}

describe('custom object rule schemas', () => {
    it('reads deployment-status-deployed from a severity alone', () => {
        expect(readName('custom-object/deployment-status-deployed', 'error')).to.equal('custom-object/deployment-status-deployed');
    });

    it('reads forbidden-sharing-models from a severity and the forbidden models', () => {
        expect(readName('custom-object/forbidden-sharing-models', {
            severity: 'error',
            forbiddenModels: ['ReadWrite'],
        })).to.equal('custom-object/forbidden-sharing-models');
    });

    it('rejects forbidden-sharing-models without the forbidden models', () => {
        expect(readName('custom-object/forbidden-sharing-models', {
            severity: 'error',
        })).to.equal(null);
    });
});
