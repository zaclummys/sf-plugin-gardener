import type { CustomObject } from './custom-object.js';
import type { SharingModels } from './sharing-models.js';

export class CustomObjects {
    private readonly objects: CustomObject[];

    /** @param objects The custom objects of the package directories that are linted. */
    public constructor({ objects }: { objects: CustomObject[] }) {
        this.objects = objects;
    }

    /** Lists the custom objects that are still in development. */
    public listInDevelopment(): CustomObject[] {
        return this.objects.filter((object) => object.isInDevelopment());
    }

    /**
     * Lists the custom objects whose sharingModel is one of the models.
     *
     * @param models The models to look for.
     */
    public listWithSharingModelIn(models: SharingModels): CustomObject[] {
        return this.objects.filter((object) => object.hasSharingModelIn(models));
    }
}
