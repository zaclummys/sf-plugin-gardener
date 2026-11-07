import { Rule, type Finding, type Project, type Severity } from '@sf-plugin-gardener/core';

export class SecurityClassificationRequiredRule extends Rule {
    public constructor({ severity }: { severity: Severity }) {
        super({
            name: 'custom-field/security-classification-required',
            severity,
        });
    }

    public check({ project }: { project: Project }): Finding[] {
        const customFields = project.getCustomFields();
        const fields = customFields.listWithoutSecurityClassification();

        return fields.map((field) => this.reportFile({
            message: `The field ${field.getName()} declares no securityClassification.`,
            file: field.getPath(),
        }));
    }
}
