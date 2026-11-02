import { Rule, type Finding, type Project, type Severity } from '../../core/index.js';

export class MaxApiVersionRule extends Rule {
    private readonly maxVersion: string;

    public constructor({
        severity, maxVersion,
    }: {
        severity: Severity;
        maxVersion: string;
    }) {
        super({
            name: 'project/max-api-version',
            severity,
        });

        this.maxVersion = maxVersion;
    }

    public check({ project }: { project: Project }): Finding[] {
        const files = project.listFiles().filter((file) => file.hasApiVersionAbove(this.maxVersion));

        return files.map((file) => this.reportFile({
            message: `The apiVersion ${String(file.getApiVersion())} is above the maximum ${this.maxVersion}.`,
            file: file.getPath(),
        }));
    }
}
