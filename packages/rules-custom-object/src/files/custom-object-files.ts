import type { ComponentFiles } from '@sf-plugin-gardener/core';
import { CustomObjectFile } from './custom-object-file.js';
import type { SharingModels } from '../metadata/sharing-models.js';

export class CustomObjectFiles {
    private readonly files: CustomObjectFile[];

    /** @param files The custom object files of the package directories that are linted. */
    public constructor({ files }: { files: CustomObjectFile[] }) {
        this.files = files;
    }

    /**
     * Builds the custom object files of the component files.
     *
     * @param componentFiles The component files, some of which hold custom objects.
     */
    public static from({ componentFiles }: { componentFiles: ComponentFiles }): CustomObjectFiles {
        const files = componentFiles.listOfType('CustomObject').map((componentFile) => new CustomObjectFile({
            componentFile,
        }));

        return new CustomObjectFiles({
            files,
        });
    }

    /** Lists the files of the custom objects that are still in development. */
    public listInDevelopment(): CustomObjectFile[] {
        return this.files.filter((file) => file.getCustomObject().isInDevelopment());
    }

    /**
     * Lists the files of the custom objects whose sharingModel is one of the models.
     *
     * @param models The models to look for.
     */
    public listWithSharingModelIn(models: SharingModels): CustomObjectFile[] {
        return this.files.filter((file) => file.getCustomObject().hasSharingModelIn(models));
    }
}
