import type { CustomField } from './custom-field.js';
import type { DescriptionLength } from './description-length.js';

export class CustomFields {
    private readonly fields: CustomField[];

    /** @param fields The custom fields of the package directories that are linted. */
    public constructor({ fields }: { fields: CustomField[] }) {
        this.fields = fields;
    }

    /** Lists the custom fields that declare no description. */
    public listUndescribed(): CustomField[] {
        return this.fields.filter((field) => field.isUndescribed());
    }

    /** Lists the custom fields that declare no securityClassification. */
    public listWithoutSecurityClassification(): CustomField[] {
        return this.fields.filter((field) => field.lacksSecurityClassification());
    }

    /** Lists the custom fields that declare no complianceGroup. */
    public listWithoutComplianceGroup(): CustomField[] {
        return this.fields.filter((field) => field.lacksComplianceGroup());
    }

    /**
     * Lists the custom fields that declare a description shorter than a length.
     *
     * @param length The length to compare with.
     */
    public listWithDescriptionShorterThan(length: DescriptionLength): CustomField[] {
        return this.fields.filter((field) => field.hasDescriptionShorterThan(length));
    }
}
