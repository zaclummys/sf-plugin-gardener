export class SharingModel {
    private readonly value: string;

    public constructor(value: string) {
        this.value = value;
    }

    /**
     * Builds the sharingModel that a file declares.
     *
     * @param value The value of the sharingModel, if the file declares one.
     * @returns The sharingModel, or null when the file declares none.
     */
    public static from(value: string | null): SharingModel | null {
        if (!value) {
            return null;
        }

        return new SharingModel(value);
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
