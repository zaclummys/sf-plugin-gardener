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
        const files = customFieldFiles.listWithoutComplianceGroup();

        return files.map((file) => this.reportFile({
            message: `The field ${file.getCustomField().getName()} declares no complianceGroup.`,
            file: file.getPath(),
        }));
    }
}
