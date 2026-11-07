import type { Finding, Severity } from '@sf-plugin-gardener/core';
import { CustomFieldRule } from '../custom-field-rule.js';
import type { CustomFields } from '../custom-fields.js';

export class SecurityClassificationRequiredRule extends CustomFieldRule {
    public constructor({ severity }: { severity: Severity }) {
        super({
            name: 'custom-field/security-classification-required',
            severity,
        });
    }

    public checkFields({ customFields }: { customFields: CustomFields }): Finding[] {
        const fields = customFields.listWithoutSecurityClassification();

        return fields.map((field) => this.reportFile({
            message: `The field ${field.getName()} declares no securityClassification.`,
            file: field.getPath(),
        }));
    }
}
