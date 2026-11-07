import { Rule, type Finding, type Project, type Severity } from '../../core/index.js';

export class DeploymentStatusDeployedRule extends Rule {
    public constructor({ severity }: { severity: Severity }) {
        super({
            name: 'custom-object/deployment-status-deployed',
            severity,
        });
    }

    public check({ project }: { project: Project }): Finding[] {
        const customObjects = project.getCustomObjects();
        const objects = customObjects.listInDevelopment();

        return objects.map((object) => this.reportFile({
            message: `The object ${object.getName()} has the deploymentStatus InDevelopment.`,
            file: object.getPath(),
        }));
    }
}
