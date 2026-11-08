import type { Finding, Severity } from '@sf-plugin-gardener/core';
import { ProjectFileRule } from './project-file-rule.js';
import type { ProjectFiles } from '../files/index.js';

export class MaxFilesRule extends ProjectFileRule {
    private readonly max: number;

    public constructor({
        severity, max,
    }: {
        severity: Severity;
        max: number;
    }) {
        super({
            name: 'project/max-files',
            severity,
        });

        this.max = max;
    }

    public check(projectFiles: ProjectFiles): Finding[] {

        if (projectFiles.countFiles() <= this.max) {
            return [];
        }

        const finding = this.report({
            message: `The project has more than ${this.max} files.`,
        });

        return [finding];
    }
}
