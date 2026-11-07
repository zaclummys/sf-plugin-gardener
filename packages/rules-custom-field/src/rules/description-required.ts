import type { Finding, Severity } from '@sf-plugin-gardener/core';
import { CustomFieldRule } from '../custom-field-rule.js';
import type { CustomFieldFiles } from '../custom-field-files.js';
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

    public check(customFieldFiles: CustomFieldFiles): Finding[] {
        const undescribed = customFieldFiles.listUndescribed().map((field) => this.reportFile({
            message: `The field ${field.getName()} declares no description.`,
            file: field.getPath(),
        }));
        const short = customFieldFiles.listWithDescriptionShorterThan(this.minLength).map((field) => this.reportFile({
            message: `The field ${field.getName()} has a description shorter than ${this.minLength.toString()}.`,
            file: field.getPath(),
        }));

        return [
            ...undescribed,
            ...short,
        ];
    }
}
