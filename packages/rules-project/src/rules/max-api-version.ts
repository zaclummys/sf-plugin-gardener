import type { Finding, Severity } from '@sf-plugin-gardener/core';
import { ProjectFileRule } from './project-file-rule.js';
import type { ApiVersion } from '../metadata/index.js';
import type { ProjectFiles } from '../files/index.js';

export class MaxApiVersionRule extends ProjectFileRule {
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

    public check(projectFiles: ProjectFiles): Finding[] {
        const files = projectFiles.listWithApiVersionAbove(this.maxVersion);

        return files.map((file) => this.reportFile({
            message: `The apiVersion ${String(file.getApiVersion())} is above the maximum ${this.maxVersion.toString()}.`,
            file: file.getPath(),
        }));
    }
}
