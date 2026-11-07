import type { Finding, Severity } from '@sf-plugin-gardener/core';
import { CustomFieldRule } from '../custom-field-rule.js';
import type { CustomFieldFiles } from '../custom-field-files.js';

export class ComplianceGroupRequiredRule extends CustomFieldRule {
    public constructor({ severity }: { severity: Severity }) {
        super({
            name: 'custom-field/compliance-group-required',
            severity,
        });
    }

    public check(customFieldFiles: CustomFieldFiles): Finding[] {
        const fields = customFieldFiles.listWithoutComplianceGroup();

        return fields.map((field) => this.reportFile({
            message: `The field ${field.getName()} declares no complianceGroup.`,
            file: field.getPath(),
        }));
    }
}
