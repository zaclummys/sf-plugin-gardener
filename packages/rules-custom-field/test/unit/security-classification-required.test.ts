import { expect } from 'chai';
import { SecurityClassificationRequiredRule } from '../../lib/rules/security-classification-required.js';
import { buildFieldFiles } from './build-field-files.ts';

const rule = new SecurityClassificationRequiredRule({
    severity: 'error',
});

const lacking = {
    name: 'Sample__c.Code__c',
    path: 'force-app/Code__c.field-meta.xml',
    content: {},
};

const classified = {
    name: 'Sample__c.Name__c',
    path: 'force-app/Name__c.field-meta.xml',
    content: {
        securityClassification: 'Confidential',
    },
};

describe('SecurityClassificationRequiredRule', () => {
    it('reports the field that declares no securityClassification', () => {
        const findings = rule.check(buildFieldFiles([lacking]));

        expect(findings.map((finding) => finding.getMessage())).to.deep.equal(['The field Sample__c.Code__c declares no securityClassification.']);
    });

    it('reports nothing for a field that declares a securityClassification', () => {
        expect(rule.check(buildFieldFiles([classified]))).to.deep.equal([]);
    });

    it('reports the file of the field', () => {
        const findings = rule.check(buildFieldFiles([lacking]));

        expect(findings.map((finding) => finding.getFile())).to.deep.equal(['force-app/Code__c.field-meta.xml']);
    });

    it('reports with its name and the severity that it was given', () => {
        const [finding] = rule.check(buildFieldFiles([lacking]));

        expect(finding).to.deep.include({
            rule: 'custom-field/security-classification-required',
            severity: 'error',
        });
    });
});
