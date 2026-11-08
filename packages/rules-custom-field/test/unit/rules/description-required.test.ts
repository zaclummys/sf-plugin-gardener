import { expect } from 'chai';
import { DescriptionLength } from '../../../lib/metadata/index.js';
import { DescriptionRequiredRule } from '../../../lib/rules/index.js';
import { buildComponentFiles } from '@sf-plugin-gardener/testkit';
import { buildFieldFiles } from './build-field-files.ts';

const rule = new DescriptionRequiredRule({
    severity: 'warn',
    minLength: new DescriptionLength(20),
});

const undescribed = {
    name: 'Sample__c.Code__c',
    path: 'force-app/Code__c.field-meta.xml',
    content: {},
};

const short = {
    name: 'Sample__c.Name__c',
    path: 'force-app/Name__c.field-meta.xml',
    content: {
        description: 'Too short',
    },
};

const described = {
    name: 'Sample__c.Full__c',
    path: 'force-app/Full__c.field-meta.xml',
    content: {
        description: 'The full name of the sample.',
    },
};

describe('DescriptionRequiredRule', () => {
    it('reports the field that declares no description', () => {
        const findings = rule.check(buildFieldFiles([undescribed]));

        expect(findings.map((finding) => finding.getMessage())).to.deep.equal(['The field Sample__c.Code__c declares no description.']);
    });

    it('reports the field whose description is shorter than the minimum', () => {
        const findings = rule.check(buildFieldFiles([short]));

        expect(findings.map((finding) => finding.getMessage())).to.deep.equal(['The field Sample__c.Name__c has a description shorter than 20 characters.']);
    });

    it('reports nothing for a field whose description reaches the minimum', () => {
        expect(rule.check(buildFieldFiles([described]))).to.deep.equal([]);
    });

    it('reads the custom fields from the components', () => {
        const findings = rule.run(buildComponentFiles([
            {
                ...undescribed,
                type: 'CustomField',
            },
            {
                name: 'Sample__c',
                type: 'CustomObject',
                path: 'force-app/Sample__c.object-meta.xml',
                content: {},
            },
        ]));

        expect(findings.map((finding) => finding.getFile())).to.deep.equal(['force-app/Code__c.field-meta.xml']);
    });

    it('reports the file of the field', () => {
        const findings = rule.check(buildFieldFiles([undescribed]));

        expect(findings.map((finding) => finding.getFile())).to.deep.equal(['force-app/Code__c.field-meta.xml']);
    });

    it('reports with its name and the severity that it was given', () => {
        const [finding] = rule.check(buildFieldFiles([undescribed]));

        expect(finding).to.deep.include({
            rule: 'custom-field/description-required',
            severity: 'warn',
        });
    });

    it('reports the undescribed fields before the short ones', () => {
        const findings = rule.check(buildFieldFiles([
            short,
            undescribed,
        ]));

        expect(findings.map((finding) => finding.getFile())).to.deep.equal([
            'force-app/Code__c.field-meta.xml',
            'force-app/Name__c.field-meta.xml',
        ]);
    });
});
