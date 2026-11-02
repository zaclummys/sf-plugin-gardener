export class ApiVersion {
    private readonly value: number;

    public constructor(value: number) {
        this.value = value;
    }

    /**
     * Builds a version from the text that Salesforce writes, such as 64.0.
     *
     * @param text The text of the version.
     */
    public static fromString(text: string): ApiVersion {
        return new ApiVersion(Number(text));
    }

    /**
     * Tells whether this version is below another.
     *
     * @param other The version to compare with.
     */
    public isBelow(other: ApiVersion): boolean {
        return this.value < other.value;
    }

    /**
     * Tells whether this version is above another.
     *
     * @param other The version to compare with.
     */
    public isAbove(other: ApiVersion): boolean {
        return this.value > other.value;
    }

    /** Formats the version the way Salesforce writes it, such as 64.0. */
    public toString(): string {
        return this.value.toFixed(1);
    }
}
