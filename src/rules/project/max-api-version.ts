import { Rule, type ApiVersion, type Finding, type Project, type Severity } from '../../core/index.js';

export class MaxApiVersionRule extends Rule {
    private readonly maxVersion: ApiVersion;

    public constructor({
        severity, maxVersion,
    }: {
        severity: Severity;
        maxVersion: ApiVersion;
    }) {
        super({
            name: 'project/max-api-version',
            severity,
        });

        this.maxVersion = maxVersion;
    }

    public check({ project }: { project: Project }): Finding[] {
        const versionedFiles = project.listFiles().filter((file) => file.hasApiVersion());
        const files = versionedFiles.filter((file) => file.hasApiVersionAbove(this.maxVersion));

        return files.map((file) => this.reportFile({
            message: `The apiVersion ${String(file.getApiVersion())} is above the maximum ${this.maxVersion.toString()}.`,
            file: file.getPath(),
        }));
    }
}
