import type { Finding, Severity } from '@sf-plugin-gardener/core';
import { CustomObjectRule } from './custom-object-rule.js';
import type { CustomObjectFiles } from '../files/custom-object-files.js';

export class DeploymentStatusDeployedRule extends CustomObjectRule {
    public constructor({ severity }: { severity: Severity }) {
        super({
            name: 'custom-object/deployment-status-deployed',
            severity,
        });
    }

    public check(customObjectFiles: CustomObjectFiles): Finding[] {
        const files = customObjectFiles.listInDevelopment();

        return files.map((file) => this.reportFile({
            message: `The object ${file.getCustomObject().getName()} has the deploymentStatus InDevelopment.`,
            file: file.getPath(),
        }));
    }
}
