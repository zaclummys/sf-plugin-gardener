import type { ComponentFile } from '@sf-plugin-gardener/core';
import { z } from 'zod';
import { CustomObject } from './custom-object.js';

const objectContent = z.object({
    deploymentStatus: z.string().nullish(),
    sharingModel: z.string().nullish(),
});

export class CustomObjectFile {
    private readonly componentFile: ComponentFile;

    /** @param componentFile The component that holds the object file, which is read only when the object is asked for. */
    public constructor({ componentFile }: { componentFile: ComponentFile }) {
        this.componentFile = componentFile;
    }

    /** Returns the path of the object file, relative to the project. */
    public getPath(): string {
        return this.componentFile.getPath();
    }

    /** Reads the object that the file declares. */
    public getCustomObject(): CustomObject {
        const metadata = objectContent.parse(this.componentFile.readContent());

        return new CustomObject({
            name: this.componentFile.getName(),
            deploymentStatus: metadata.deploymentStatus ?? null,
            sharingModel: metadata.sharingModel ?? null,
        });
    }
}
