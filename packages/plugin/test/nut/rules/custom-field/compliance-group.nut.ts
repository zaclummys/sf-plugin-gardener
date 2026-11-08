import { expect } from 'chai';
import { execLintJson, findFixture } from '@sf-plugin-gardener/testkit';

describe('lint run custom-field/compliance-group-required', () => {
    it('reports as a warning the field that declares no complianceGroup', () => {
        const directory = findFixture('custom-field-without-compliance-group-project');
        const output = execLintJson({
            directory,
        });

        expect(output.result.findings).to.deep.equal([
            {
                rule: 'custom-field/compliance-group-required',
                severity: 'warn',
                message: 'The field Sample__c.Code__c declares no complianceGroup.',
                file: 'force-app/main/default/objects/Sample__c/fields/Code__c.field-meta.xml',
            },
        ]);
    });
});
