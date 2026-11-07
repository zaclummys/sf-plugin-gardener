import type { CustomObject as CustomObjectMetadata } from '@salesforce/types/metadata';
import type { Component } from '@sf-plugin-gardener/core';
import { DeploymentStatus } from './deployment-status.js';
import { SharingModel } from './sharing-model.js';
import type { SharingModels } from './sharing-models.js';

export class CustomObject {
    private readonly name: string;
    private readonly path: string;
    private readonly deploymentStatus: DeploymentStatus | null;
    private readonly sharingModel: SharingModel | null;

    /**
     * @param name The full name of the object, such as Sample__c.
     * @param path The path of the object file, relative to the project.
     * @param deploymentStatus The deploymentStatus that the object declares, if any.
     * @param sharingModel The sharingModel that the object declares, if any.
     */
    public constructor({
        name, path, deploymentStatus, sharingModel,
    }: {
        name: string;
        path: string;
        deploymentStatus: string | null;
        sharingModel: string | null;
    }) {
        this.name = name;
        this.path = path;
        this.deploymentStatus = DeploymentStatus.from(deploymentStatus);
        this.sharingModel = SharingModel.from(sharingModel);
    }

    /**
     * Builds an object from a component of the CustomObject type.
     *
     * @param component The component that holds the object file.
     */
    public static from({ component }: { component: Component }): CustomObject {
        const content = component.getContent() as { CustomObject: CustomObjectMetadata };
        const metadata = content.CustomObject;

        return new CustomObject({
            name: component.getName(),
            path: component.getPath(),
            deploymentStatus: metadata.deploymentStatus ?? null,
            sharingModel: metadata.sharingModel ?? null,
        });
    }

    /** Returns the full name of the object, such as Sample__c. */
    public getName(): string {
        return this.name;
    }

    /** Returns the path of the object file, relative to the project. */
    public getPath(): string {
        return this.path;
    }

    /** Returns the sharingModel that the object declares, or null when it declares none. */
    public getSharingModel(): SharingModel | null {
        return this.sharingModel;
    }

    /** Tells whether the object is still in development. */
    public isInDevelopment(): boolean {
        return this.deploymentStatus?.isInDevelopment() === true;
    }

    /**
     * Tells whether the sharingModel of the object is one of the models.
     *
     * @param models The models to look in.
     */
    public hasSharingModelIn(models: SharingModels): boolean {
        return this.sharingModel != null && models.includes(this.sharingModel);
    }
}
