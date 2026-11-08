import { expect } from 'chai';
import { ComplianceGroupRequiredRule } from '../../lib/rules/compliance-group-required.js';
import { buildFieldFiles } from './build-field-files.ts';

const rule = new ComplianceGroupRequiredRule({
    severity: 'warn',
});

const lacking = {
    name: 'Sample__c.Code__c',
    path: 'force-app/Code__c.field-meta.xml',
    content: {},
};

const grouped = {
    name: 'Sample__c.Name__c',
    path: 'force-app/Name__c.field-meta.xml',
    content: {
        complianceGroup: 'PII',
    },
};

describe('ComplianceGroupRequiredRule', () => {
    it('reports the field that declares no complianceGroup', () => {
        const findings = rule.check(buildFieldFiles([lacking]));

        expect(findings.map((finding) => finding.getMessage())).to.deep.equal(['The field Sample__c.Code__c declares no complianceGroup.']);
    });

    it('reports nothing for a field that declares a complianceGroup', () => {
        expect(rule.check(buildFieldFiles([grouped]))).to.deep.equal([]);
    });

    it('reports the file of the field', () => {
        const findings = rule.check(buildFieldFiles([lacking]));

        expect(findings.map((finding) => finding.getFile())).to.deep.equal(['force-app/Code__c.field-meta.xml']);
    });

    it('reports with its name and the severity that it was given', () => {
        const [finding] = rule.check(buildFieldFiles([lacking]));

        expect(finding).to.deep.include({
            rule: 'custom-field/compliance-group-required',
            severity: 'warn',
        });
    });
});
