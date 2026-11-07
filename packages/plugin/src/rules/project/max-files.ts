import { Rule, type Finding, type Project, type Severity } from '@sf-plugin-gardener/core';

export class MaxFilesRule extends Rule {
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

    public check({ project }: { project: Project }): Finding[] {
        if (project.countFiles() <= this.max) {
            return [];
        }

        const finding = this.report({
            message: `The project has more than ${this.max} files.`,
        });

        return [finding];
    }
}
