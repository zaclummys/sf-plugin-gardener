export class SharingModel {
    private readonly value: string;

    public constructor(value: string) {
        this.value = value;
    }

    /**
     * Tells whether this model is the same as another.
     *
     * @param other The model to compare with.
     */
    public equals(other: SharingModel): boolean {
        return this.value === other.value;
    }

    /** Returns the model the way Salesforce writes it, such as ReadWrite. */
    public toString(): string {
        return this.value;
    }
}
