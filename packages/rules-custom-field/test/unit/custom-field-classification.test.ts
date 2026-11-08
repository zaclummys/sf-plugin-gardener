import { expect } from 'chai';
import { buildField } from './build-field.ts';

describe('CustomField classification', () => {
    it('lacks a securityClassification when it declares none', () => {
        expect(buildField({}).lacksSecurityClassification()).to.equal(true);
    });

    it('does not lack a securityClassification when it declares one', () => {
        expect(buildField({
            securityClassification: 'Confidential',
        }).lacksSecurityClassification()).to.equal(false);
    });

    it('lacks a complianceGroup when it declares none', () => {
        expect(buildField({}).lacksComplianceGroup()).to.equal(true);
    });

    it('does not lack a complianceGroup when it declares one', () => {
        expect(buildField({
            complianceGroup: 'PII',
        }).lacksComplianceGroup()).to.equal(false);
    });
});
