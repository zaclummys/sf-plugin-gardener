import { expect } from 'chai';
import { DeploymentStatusDeployedRule } from '../../../lib/rules/index.js';
import { buildObjectFiles } from './build-object-files.ts';

const rule = new DeploymentStatusDeployedRule({
    severity: 'warn',
});

function buildObject(content: unknown) {
    return {
        name: 'Sample__c',
        path: 'force-app/Sample__c.object-meta.xml',
        content,
    };
}

describe('DeploymentStatusDeployedRule', () => {
    it('reports the object whose deploymentStatus is InDevelopment', () => {
        const findings = rule.check(buildObjectFiles([
            buildObject({
                deploymentStatus: 'InDevelopment',
            }),
        ]));

        expect(findings.map((finding) => finding.getMessage())).to.deep.equal(['The object Sample__c has the deploymentStatus InDevelopment.']);
    });

    it('reports nothing for an object whose deploymentStatus is Deployed', () => {
        const findings = rule.check(buildObjectFiles([
            buildObject({
                deploymentStatus: 'Deployed',
            }),
        ]));

        expect(findings).to.deep.equal([]);
    });

    it('reports nothing for an object that declares no deploymentStatus', () => {
        expect(rule.check(buildObjectFiles([buildObject({})]))).to.deep.equal([]);
    });

    it('reports the file of the object, with its name and severity', () => {
        const [finding] = rule.check(buildObjectFiles([
            buildObject({
                deploymentStatus: 'InDevelopment',
            }),
        ]));

        expect(finding).to.deep.include({
            rule: 'custom-object/deployment-status-deployed',
            severity: 'warn',
            file: 'force-app/Sample__c.object-meta.xml',
        });
    });
});
