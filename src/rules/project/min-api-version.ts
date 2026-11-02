import { Rule, type Finding, type Project, type Severity } from '../../core/index.js';

export class MinApiVersionRule extends Rule {
    private readonly minVersion: string;

    public constructor({
        severity, minVersion,
    }: {
        severity: Severity;
        minVersion: string;
    }) {
        super({
            name: 'project/min-api-version',
            severity,
        });

        this.minVersion = minVersion;
    }

    public check({ project }: { project: Project }): Finding[] {
        const files = project.listFiles().filter((file) => file.hasApiVersionBelow(this.minVersion));

        return files.map((file) => this.reportFile({
            message: `The apiVersion ${String(file.getApiVersion())} is below the minimum ${this.minVersion}.`,
            file: file.getPath(),
        }));
    }
}
