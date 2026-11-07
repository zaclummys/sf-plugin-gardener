import { Rule, type ApiVersion, type Finding, type Project, type Severity } from '@sf-plugin-gardener/core';

export class MinApiVersionRule extends Rule {
    private readonly minVersion: ApiVersion;

    public constructor({
        severity, minVersion,
    }: {
        severity: Severity;
        minVersion: ApiVersion;
    }) {
        super({
            name: 'project/min-api-version',
            severity,
        });

        this.minVersion = minVersion;
    }

    public check({ project }: { project: Project }): Finding[] {
        const versionedFiles = project.listFiles().filter((file) => file.hasApiVersion());
        const files = versionedFiles.filter((file) => file.hasApiVersionBelow(this.minVersion));

        return files.map((file) => this.reportFile({
            message: `The apiVersion ${file.getApiVersion()?.toString()} is below the minimum ${this.minVersion.toString()}.`,
            file: file.getPath(),
        }));
    }
}
