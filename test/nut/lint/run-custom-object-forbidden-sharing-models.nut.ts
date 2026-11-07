import { expect } from 'chai';
import { execLintJson, findFixture } from '../run.ts';

describe('lint run custom-object/forbidden-sharing-models', () => {
    it('reports the object whose sharingModel is forbidden', () => {
        const directory = findFixture('custom-object-forbidden-sharing-model-project');
        const output = execLintJson({
            directory,
        }, {
            exitCode: 1,
        });

        expect(output.result.findings).to.deep.equal([
            {
                rule: 'custom-object/forbidden-sharing-models',
                severity: 'error',
                message: 'The object Sample__c has the forbidden sharingModel ReadWrite.',
                file: 'force-app/main/default/objects/Sample__c/Sample__c.object-meta.xml',
            },
        ]);
    });
});
