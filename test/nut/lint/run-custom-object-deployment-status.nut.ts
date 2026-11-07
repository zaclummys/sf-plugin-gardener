import { expect } from 'chai';
import { execLintJson, findFixture } from '../run.ts';

describe('lint run custom-object/deployment-status-deployed', () => {
    it('reports the object whose deploymentStatus is InDevelopment', () => {
        const directory = findFixture('custom-object-in-development-project');
        const output = execLintJson({
            directory,
        }, {
            exitCode: 1,
        });

        expect(output.result.findings).to.deep.equal([
            {
                rule: 'custom-object/deployment-status-deployed',
                severity: 'error',
                message: 'The object Sample__c has the deploymentStatus InDevelopment.',
                file: 'force-app/main/default/objects/Sample__c/Sample__c.object-meta.xml',
            },
        ]);
    });
});
