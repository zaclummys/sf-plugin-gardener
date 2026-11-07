import { Rule, type Finding, type Project, type Severity } from '@sf-plugin-gardener/core';

export class PicklistRestrictedRule extends Rule {
    public constructor({ severity }: { severity: Severity }) {
        super({
            name: 'custom-field/picklist-restricted',
            severity,
        });
    }

    public check({ project }: { project: Project }): Finding[] {
        const customFields = project.getCustomFields();
        const fields = customFields.listUnrestrictedPicklists();

        return fields.map((field) => this.reportFile({
            message: `The picklist ${field.getName()} is not restricted to its values.`,
            file: field.getPath(),
        }));
    }
}
