import type { Finding, Severity } from '@sf-plugin-gardener/core';
import { ProjectFileRule } from '../project-file-rule.js';
import type { ApiVersion } from '../api-version.js';
import type { ProjectFiles } from '../project-files.js';

export class MinApiVersionRule extends ProjectFileRule {
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

    public check(projectFiles: ProjectFiles): Finding[] {
        const files = projectFiles.listWithApiVersionBelow(this.minVersion);

        return files.map((file) => this.reportFile({
            message: `The apiVersion ${file.getApiVersion()?.toString()} is below the minimum ${this.minVersion.toString()}.`,
            file: file.getPath(),
        }));
    }
}
