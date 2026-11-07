import type { Finding, Severity } from '@sf-plugin-gardener/core';
import { CustomFieldRule } from '../custom-field-rule.js';
import type { CustomFields } from '../custom-fields.js';

export class ComplianceGroupRequiredRule extends CustomFieldRule {
    public constructor({ severity }: { severity: Severity }) {
        super({
            name: 'custom-field/compliance-group-required',
            severity,
        });
    }

    public check(customFields: CustomFields): Finding[] {
        const fields = customFields.listWithoutComplianceGroup();

        return fields.map((field) => this.reportFile({
            message: `The field ${field.getName()} declares no complianceGroup.`,
            file: field.getPath(),
        }));
    }
}
