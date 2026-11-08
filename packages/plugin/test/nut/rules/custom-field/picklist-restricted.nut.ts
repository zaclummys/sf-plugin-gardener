import { expect } from 'chai';
import { execLintJson, findFixture } from '@sf-plugin-gardener/testkit';

const unrestrictedFinding = {
    rule: 'custom-field/picklist-restricted',
    severity: 'error',
    message: 'The picklist Sample__c.Status__c is not restricted to its values.',
    file: 'force-app/main/default/objects/Sample__c/fields/Status__c.field-meta.xml',
};

describe('lint run custom-field/picklist-restricted', () => {
    it('reports the picklist whose restricted is false', () => {
        const directory = findFixture('custom-field-explicitly-unrestricted-picklist-project');
        const output = execLintJson({
            directory,
        }, {
            exitCode: 1,
        });

        expect(output.result.findings).to.deep.equal([unrestrictedFinding]);
    });

    it('reports nothing for a picklist whose restricted is true', () => {
        const directory = findFixture('custom-field-restricted-picklist-project');
        const output = execLintJson({
            directory,
        });

        expect(output.result.findings).to.deep.equal([]);
    });
});
