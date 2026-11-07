export class DeploymentStatus {
    private readonly value: string;

    public constructor(value: string) {
        this.value = value;
    }

    /** Tells whether the component is still in development. */
    public isInDevelopment(): boolean {
        return this.value === 'InDevelopment';
    }
}
