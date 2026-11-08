import { expect } from 'chai';
import { execLintJson, findFixture } from '../../run.ts';

describe('lint run custom-field/security-classification-required', () => {
    it('reports the field that declares no securityClassification', () => {
        const directory = findFixture('custom-field-without-security-classification-project');
        const output = execLintJson({
            directory,
        }, {
            exitCode: 1,
        });

        expect(output.result.findings).to.deep.equal([
            {
                rule: 'custom-field/security-classification-required',
                severity: 'error',
                message: 'The field Sample__c.Code__c declares no securityClassification.',
                file: 'force-app/main/default/objects/Sample__c/fields/Code__c.field-meta.xml',
            },
        ]);
    });
});
