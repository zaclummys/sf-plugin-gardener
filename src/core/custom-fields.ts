import type { CustomField } from './custom-field.js';

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
}
