import type { ComponentFiles } from '@sf-plugin-gardener/core';
import { CustomObjectFile } from './custom-object-file.js';
import type { SharingModels } from './sharing-models.js';

export class CustomObjectFiles {
    private readonly objects: CustomObjectFile[];

    /** @param objects The custom objects of the package directories that are linted. */
    public constructor({ objects }: { objects: CustomObjectFile[] }) {
        this.objects = objects;
    }

    /**
     * Builds the custom objects of the components.
     *
     * @param componentFiles The components, some of which hold object files.
     */
    public static from({ componentFiles }: { componentFiles: ComponentFiles }): CustomObjectFiles {
        const objects = componentFiles.listOfType('CustomObject').map((componentFile) => CustomObjectFile.from({
            componentFile,
        }));

        return new CustomObjectFiles({
            objects,
        });
    }

    /** Lists the custom objects that are still in development. */
    public listInDevelopment(): CustomObjectFile[] {
        return this.objects.filter((object) => object.isInDevelopment());
    }

    /**
     * Lists the custom objects whose sharingModel is one of the models.
     *
     * @param models The models to look for.
     */
    public listWithSharingModelIn(models: SharingModels): CustomObjectFile[] {
        return this.objects.filter((object) => object.hasSharingModelIn(models));
    }
}
