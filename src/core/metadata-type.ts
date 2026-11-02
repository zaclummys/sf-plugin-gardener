export class MetadataType {
    private readonly suffix: string;

    public constructor({ suffix }: { suffix: string }) {
        this.suffix = suffix;
    }

    /**
     * Tells whether a file is of this type.
     *
     * @param file The path or the name of the file.
     */
    public matches(file: string): boolean {
        return file.endsWith(this.suffix);
    }
}
