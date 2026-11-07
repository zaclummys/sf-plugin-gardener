import type { DeploymentStatus } from './deployment-status.js';

export class CustomObject {
    private readonly name: string;
    private readonly path: string;
    private readonly deploymentStatus: DeploymentStatus | null;

    /**
     * @param name The full name of the object, such as Sample__c.
     * @param path The path of the object file, relative to the project.
     * @param deploymentStatus The deploymentStatus that the object declares, or null when it declares none.
     */
    public constructor({
        name, path, deploymentStatus,
    }: {
        name: string;
        path: string;
        deploymentStatus: DeploymentStatus | null;
    }) {
        this.name = name;
        this.path = path;
        this.deploymentStatus = deploymentStatus;
    }

    /** Returns the full name of the object, such as Sample__c. */
    public getName(): string {
        return this.name;
    }

    /** Returns the path of the object file, relative to the project. */
    public getPath(): string {
        return this.path;
    }

    /** Tells whether the object is still in development. */
    public isInDevelopment(): boolean {
        return this.deploymentStatus?.isInDevelopment() === true;
    }
}
