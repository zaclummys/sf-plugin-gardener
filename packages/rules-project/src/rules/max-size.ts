import type { Finding, Severity } from '@sf-plugin-gardener/core';
import { ProjectFileRule } from '../project-file-rule.js';
import type { ProjectFiles } from '../project-files.js';

const bytesInMegabyte = 1_048_576;

export class MaxSizeRule extends ProjectFileRule {
    private readonly maxInMegabytes: number;

    public constructor({
        severity, maxInMegabytes,
    }: {
        severity: Severity;
        maxInMegabytes: number;
    }) {
        super({
            name: 'project/max-size',
            severity,
        });

        this.maxInMegabytes = maxInMegabytes;
    }

    public check(projectFiles: ProjectFiles): Finding[] {

        if (projectFiles.sumSizes() <= this.maxInMegabytes * bytesInMegabyte) {
            return [];
        }

        const finding = this.report({
            message: `The project is larger than ${this.maxInMegabytes} MB.`,
        });

        return [finding];
    }
}
