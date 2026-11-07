import { Rule, type Finding, type Project, type Severity } from '@sf-plugin-gardener/core';

const bytesInMegabyte = 1_048_576;

export class MaxSizeRule extends Rule {
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

    public check({ project }: { project: Project }): Finding[] {
        if (project.sumSizes() <= this.maxInMegabytes * bytesInMegabyte) {
            return [];
        }

        const finding = this.report({
            message: `The project is larger than ${this.maxInMegabytes} MB.`,
        });

        return [finding];
    }
}
