export class DeploymentStatus {
    private readonly value: string;

    public constructor(value: string) {
        this.value = value;
    }

    /**
     * Builds the deploymentStatus that a file declares.
     *
     * @param value The value of the deploymentStatus, if the file declares one.
     * @returns The deploymentStatus, or null when the file declares none.
     */
    public static from(value: string | null): DeploymentStatus | null {
        if (!value) {
            return null;
        }

        return new DeploymentStatus(value);
    }

    /** Tells whether the component is still in development. */
    public isInDevelopment(): boolean {
        return this.value === 'InDevelopment';
    }
}
