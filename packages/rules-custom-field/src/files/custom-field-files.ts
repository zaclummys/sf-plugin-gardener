import type { ComponentFiles } from '@sf-plugin-gardener/core';
import { CustomFieldFile } from './custom-field-file.js';
import type { DescriptionLength } from '../metadata/description-length.js';

export class CustomFieldFiles {
    private readonly files: CustomFieldFile[];

    /** @param files The custom field files of the package directories that are linted. */
    public constructor({ files }: { files: CustomFieldFile[] }) {
        this.files = files;
    }

    /**
     * Builds the custom field files of the component files.
     *
     * @param componentFiles The component files, some of which hold custom fields.
     */
    public static from({ componentFiles }: { componentFiles: ComponentFiles }): CustomFieldFiles {
        const files = componentFiles.listOfType('CustomField').map((componentFile) => new CustomFieldFile({
            componentFile,
        }));

        return new CustomFieldFiles({
            files,
        });
    }

    /** Lists the files of the custom fields that declare no description. */
    public listUndescribed(): CustomFieldFile[] {
        return this.files.filter((file) => file.getCustomField().isUndescribed());
    }

    /** Lists the files of the custom fields that are picklists not restricted to their values. */
    public listUnrestrictedPicklists(): CustomFieldFile[] {
        return this.files.filter((file) => file.getCustomField().isUnrestrictedPicklist());
    }

    /** Lists the files of the custom fields that declare no securityClassification. */
    public listWithoutSecurityClassification(): CustomFieldFile[] {
        return this.files.filter((file) => file.getCustomField().lacksSecurityClassification());
    }

    /** Lists the files of the custom fields that declare no complianceGroup. */
    public listWithoutComplianceGroup(): CustomFieldFile[] {
        return this.files.filter((file) => file.getCustomField().lacksComplianceGroup());
    }

    /**
     * Lists the files of the custom fields that declare a description shorter than a length.
     *
     * @param length The length to compare with.
     */
    public listWithDescriptionShorterThan(length: DescriptionLength): CustomFieldFile[] {
        return this.files.filter((file) => file.getCustomField().hasDescriptionShorterThan(length));
    }
}
