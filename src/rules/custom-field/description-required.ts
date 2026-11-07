import { Rule, type DescriptionLength, type Finding, type Project, type Severity } from '../../core/index.js';

export class DescriptionRequiredRule extends Rule {
    private readonly minLength: DescriptionLength;

    public constructor({
        severity, minLength,
    }: {
        severity: Severity;
        minLength: DescriptionLength;
    }) {
        super({
            name: 'custom-field/description-required',
            severity,
        });

        this.minLength = minLength;
    }

    public check({ project }: { project: Project }): Finding[] {
        const fields = project.getCustomFields();
        const undescribed = fields.listUndescribed().map((field) => this.reportFile({
            message: `The field ${field.getName()} declares no description.`,
            file: field.getPath(),
        }));
        const short = fields.listWithDescriptionShorterThan(this.minLength).map((field) => this.reportFile({
            message: `The field ${field.getName()} has a description shorter than ${this.minLength.toString()}.`,
            file: field.getPath(),
        }));

        return [
            ...undescribed,
            ...short,
        ];
    }
}
