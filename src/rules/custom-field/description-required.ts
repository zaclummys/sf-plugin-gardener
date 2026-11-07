import { Rule, type Finding, type Project, type Severity } from '../../core/index.js';

export class DescriptionRequiredRule extends Rule {
    public constructor({ severity }: { severity: Severity }) {
        super({
            name: 'custom-field/description-required',
            severity,
        });
    }

    public check({ project }: { project: Project }): Finding[] {
        const customFields = project.getCustomFields();
        const fields = customFields.listUndescribed();

        return fields.map((field) => this.reportFile({
            message: `The field ${field.getName()} declares no description.`,
            file: field.getPath(),
        }));
    }
}
