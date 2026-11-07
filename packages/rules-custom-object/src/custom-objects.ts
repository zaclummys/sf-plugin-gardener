import type { Project } from '@sf-plugin-gardener/core';
import { CustomObject } from './custom-object.js';
import type { SharingModels } from './sharing-models.js';

export class CustomObjects {
    private readonly objects: CustomObject[];

    /** @param objects The custom objects of the package directories that are linted. */
    public constructor({ objects }: { objects: CustomObject[] }) {
        this.objects = objects;
    }

    /**
     * Builds the custom objects of a project.
     *
     * @param project The project whose components hold the object files.
     */
    public static from({ project }: { project: Project }): CustomObjects {
        const components = project.getComponents();
        const objects = components.listOfType('CustomObject').map((component) => CustomObject.from({
            component,
        }));

        return new CustomObjects({
            objects,
        });
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
