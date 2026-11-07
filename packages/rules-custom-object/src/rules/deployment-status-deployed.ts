import type { Finding, Severity } from '@sf-plugin-gardener/core';
import { CustomObjectRule } from '../custom-object-rule.js';
import type { CustomObjects } from '../custom-objects.js';

export class DeploymentStatusDeployedRule extends CustomObjectRule {
    public constructor({ severity }: { severity: Severity }) {
        super({
            name: 'custom-object/deployment-status-deployed',
            severity,
        });
    }

    public check(customObjects: CustomObjects): Finding[] {
        const objects = customObjects.listInDevelopment();

        return objects.map((object) => this.reportFile({
            message: `The object ${object.getName()} has the deploymentStatus InDevelopment.`,
            file: object.getPath(),
        }));
    }
}
