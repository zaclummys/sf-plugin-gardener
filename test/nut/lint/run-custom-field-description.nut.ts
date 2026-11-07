import { expect } from 'chai';
import { execLintJson, findFixture } from '../run.ts';

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
});
