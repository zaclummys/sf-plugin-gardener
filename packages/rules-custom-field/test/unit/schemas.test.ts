import { expect } from 'chai';
import { readRule } from '@sf-plugin-gardener/testkit';
import { customFieldRules } from '../../lib/index.js';

function readName(name: string, entry: unknown): string | null {
    const rule = readRule({
        schemas: customFieldRules,
        name,
        entry,
    });

    return rule?.getName() ?? null;
}

describe('custom field rule schemas', () => {
    it('reads description-required from a severity and a minimum length', () => {
        expect(readName('custom-field/description-required', {
            severity: 'error',
            minLength: 20,
        })).to.equal('custom-field/description-required');
    });

    it('rejects description-required without a minimum length', () => {
        expect(readName('custom-field/description-required', {
            severity: 'error',
        })).to.equal(null);
    });

    it('rejects description-required with a severity that does not exist', () => {
        expect(readName('custom-field/description-required', {
            severity: 'off',
            minLength: 20,
        })).to.equal(null);
    });

    it('reads security-classification-required from a severity alone', () => {
        expect(readName('custom-field/security-classification-required', 'error')).to.equal('custom-field/security-classification-required');
    });

    it('reads compliance-group-required from an object that holds the severity', () => {
        expect(readName('custom-field/compliance-group-required', {
            severity: 'warn',
        })).to.equal('custom-field/compliance-group-required');
    });

    it('reads picklist-restricted from a severity alone', () => {
        expect(readName('custom-field/picklist-restricted', 'error')).to.equal('custom-field/picklist-restricted');
    });
});
