import type { ComponentFile } from '@sf-plugin-gardener/core';
import { z } from 'zod';
import { CustomField } from './custom-field.js';

const fieldContent = z.object({
    description: z.string().nullish(),
    securityClassification: z.string().nullish(),
    complianceGroup: z.string().nullish(),
    type: z.string().nullish(),
    valueSet: z.object({
        restricted: z.union([
            z.string(),
            z.boolean(),
        ]).nullish(),
    }).nullish(),
});

export class CustomFieldFile {
    private readonly componentFile: ComponentFile;

    /** @param componentFile The component that holds the field file, which is read only when the field is asked for. */
    public constructor({ componentFile }: { componentFile: ComponentFile }) {
        this.componentFile = componentFile;
    }

    /** Returns the path of the field file, relative to the project. */
    public getPath(): string {
        return this.componentFile.getPath();
    }

    /** Reads the field that the file declares. */
    public getCustomField(): CustomField {
        const metadata = fieldContent.parse(this.componentFile.readContent());

        return new CustomField({
            name: this.componentFile.getName(),
            description: metadata.description ?? null,
            securityClassification: metadata.securityClassification ?? null,
            complianceGroup: metadata.complianceGroup ?? null,
            type: metadata.type ?? null,
            restricted: metadata.valueSet?.restricted?.toString() ?? null,
        });
    }
}
