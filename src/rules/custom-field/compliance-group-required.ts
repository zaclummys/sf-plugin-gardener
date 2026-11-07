import { Rule, type Finding, type Project, type Severity } from '../../core/index.js';

export class ComplianceGroupRequiredRule extends Rule {
    public constructor({ severity }: { severity: Severity }) {
        super({
            name: 'custom-field/compliance-group-required',
            severity,
        });
    }

    public check({ project }: { project: Project }): Finding[] {
        const customFields = project.getCustomFields();
        const fields = customFields.listWithoutComplianceGroup();

        return fields.map((field) => this.reportFile({
            message: `The field ${field.getName()} declares no complianceGroup.`,
            file: field.getPath(),
        }));
    }
}
