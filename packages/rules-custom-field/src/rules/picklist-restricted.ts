import type { Finding, Severity } from '@sf-plugin-gardener/core';
import { CustomFieldRule } from '../custom-field-rule.js';
import type { CustomFieldFiles } from '../custom-field-files.js';

export class PicklistRestrictedRule extends CustomFieldRule {
    public constructor({ severity }: { severity: Severity }) {
        super({
            name: 'custom-field/picklist-restricted',
            severity,
        });
    }

    public check(customFieldFiles: CustomFieldFiles): Finding[] {
        const files = customFieldFiles.listUnrestrictedPicklists();

        return files.map((file) => this.reportFile({
            message: `The picklist ${file.getCustomField().getName()} is not restricted to its values.`,
            file: file.getPath(),
        }));
    }
}
