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
        const undescribed = customFieldFiles.listUndescribed().map((file) => this.reportFile({
            message: `The field ${file.getCustomField().getName()} declares no description.`,
            file: file.getPath(),
        }));
        const short = customFieldFiles.listWithDescriptionShorterThan(this.minLength).map((file) => this.reportFile({
            message: `The field ${file.getCustomField().getName()} has a description shorter than ${this.minLength.toString()}.`,
            file: file.getPath(),
        }));

        return [
            ...undescribed,
            ...short,
        ];
    }
}
