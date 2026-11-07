import { expect } from 'chai';
import { execLintJson, findFixture } from '@sf-plugin-gardener/testkit';

describe('lint run custom-field/description-required', () => {
    it('reports the field that declares no description', () => {
        const directory = findFixture('custom-field-without-description-project');
        const output = execLintJson({
            directory,
        }, {
            exitCode: 1,
        });

        expect(output.result.findings).to.deep.equal([
            {
                rule: 'custom-field/description-required',
                severity: 'error',
                message: 'The field Sample__c.Code__c declares no description.',
                file: 'force-app/main/default/objects/Sample__c/fields/Code__c.field-meta.xml',
            },
        ]);
    });

    it('reports the field whose description is shorter than the minimum', () => {
        const directory = findFixture('custom-field-short-description-project');
        const output = execLintJson({
            directory,
        }, {
            exitCode: 1,
        });

        expect(output.result.findings).to.deep.equal([
            {
                rule: 'custom-field/description-required',
                severity: 'error',
                message: 'The field Sample__c.Code__c has a description shorter than 20 characters.',
                file: 'force-app/main/default/objects/Sample__c/fields/Code__c.field-meta.xml',
            },
        ]);
    });

    it('reports nothing for a field whose description reaches the minimum', () => {
        const directory = findFixture('custom-field-long-description-project');
        const output = execLintJson({
            directory,
        });

        expect(output.result.findings).to.deep.equal([]);
    });

    it('fails when the minimum length is missing', () => {
        const directory = findFixture('invalid-description-required-project');
        const output = execLintJson({
            directory,
        }, {
            exitCode: 1,
        });

        expect(output).to.include({
            name: 'invalid-configuration',
        });
    });
});
