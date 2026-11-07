import { Rule, type Finding, type Project } from '@sf-plugin-gardener/core';
import { CustomFields } from './custom-fields.js';

export abstract class CustomFieldRule extends Rule {
    public check({ project }: { project: Project }): Finding[] {
        const customFields = CustomFields.from({
            project,
        });

        return this.checkFields({
            customFields,
        });
    }

    /**
     * Checks the custom fields and reports what the rule finds.
     *
     * @param customFields The custom fields to check.
     */
    public abstract checkFields({ customFields }: { customFields: CustomFields }): Finding[];
}
