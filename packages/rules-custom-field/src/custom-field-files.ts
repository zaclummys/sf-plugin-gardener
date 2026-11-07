import type { ComponentFiles } from '@sf-plugin-gardener/core';
import { CustomFieldFile } from './custom-field-file.js';
import type { DescriptionLength } from './description-length.js';

export class CustomFieldFiles {
    private readonly fields: CustomFieldFile[];

    /** @param fields The custom fields of the package directories that are linted. */
    public constructor({ fields }: { fields: CustomFieldFile[] }) {
        this.fields = fields;
    }

    /**
     * Builds the custom fields of the components.
     *
     * @param componentFiles The components, some of which hold field files.
     */
    public static from({ componentFiles }: { componentFiles: ComponentFiles }): CustomFieldFiles {
        const fields = componentFiles.listOfType('CustomField').map((componentFile) => CustomFieldFile.from({
            componentFile,
        }));

        return new CustomFieldFiles({
            fields,
        });
    }

    /** Lists the custom fields that declare no description. */
    public listUndescribed(): CustomFieldFile[] {
        return this.fields.filter((field) => field.isUndescribed());
    }

    /** Lists the custom fields that are picklists not restricted to their values. */
    public listUnrestrictedPicklists(): CustomFieldFile[] {
        return this.fields.filter((field) => field.isUnrestrictedPicklist());
    }

    /** Lists the custom fields that declare no securityClassification. */
    public listWithoutSecurityClassification(): CustomFieldFile[] {
        return this.fields.filter((field) => field.lacksSecurityClassification());
    }

    /** Lists the custom fields that declare no complianceGroup. */
    public listWithoutComplianceGroup(): CustomFieldFile[] {
        return this.fields.filter((field) => field.lacksComplianceGroup());
    }

    /**
     * Lists the custom fields that declare a description shorter than a length.
     *
     * @param length The length to compare with.
     */
    public listWithDescriptionShorterThan(length: DescriptionLength): CustomFieldFile[] {
        return this.fields.filter((field) => field.hasDescriptionShorterThan(length));
    }
}
