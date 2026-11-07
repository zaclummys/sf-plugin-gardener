import { expect } from 'chai';
import { execLintJson, findFixture } from '../run.ts';

describe('lint run custom-object/no-public-sharing-model', () => {
    it('reports the object whose sharingModel is public', () => {
        const directory = findFixture('custom-object-public-sharing-model-project');
        const output = execLintJson({
            directory,
        }, {
            exitCode: 1,
        });

        expect(output.result.findings).to.deep.equal([
            {
                rule: 'custom-object/no-public-sharing-model',
                severity: 'error',
                message: 'The object Sample__c has the public sharingModel ReadWrite.',
                file: 'force-app/main/default/objects/Sample__c/Sample__c.object-meta.xml',
            },
        ]);
    });
});
