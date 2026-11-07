import type { Finding, Severity } from '@sf-plugin-gardener/core';
import { CustomFieldRule } from '../custom-field-rule.js';
import type { CustomFields } from '../custom-fields.js';
import type { DescriptionLength } from '../description-length.js';

export class DescriptionRequiredRule extends CustomFieldRule {
    private readonly minLength: DescriptionLength;

    public constructor({
        severity, minLength,
    }: {
        severity: Severity;
        minLength: DescriptionLength;
    }) {
        super({
            name: 'custom-field/description-required',
            severity,
        });

        this.minLength = minLength;
    }

    public checkFields({ customFields }: { customFields: CustomFields }): Finding[] {
        const undescribed = customFields.listUndescribed().map((field) => this.reportFile({
            message: `The field ${field.getName()} declares no description.`,
            file: field.getPath(),
        }));
        const short = customFields.listWithDescriptionShorterThan(this.minLength).map((field) => this.reportFile({
            message: `The field ${field.getName()} has a description shorter than ${this.minLength.toString()}.`,
            file: field.getPath(),
        }));

        return [
            ...undescribed,
            ...short,
        ];
    }
}
