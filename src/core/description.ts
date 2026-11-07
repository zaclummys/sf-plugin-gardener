export class Description {
    private readonly text: string;

    public constructor(text: string) {
        this.text = text;
    }

    /**
     * Builds the description that a file declares.
     *
     * @param text The text of the description, if the file declares one.
     * @returns The description, or null when the file declares none.
     */
    public static from(text: string | null): Description | null {
        if (!text) {
            return null;
        }

        return new Description(text);
    }

    /** Counts the characters of the description. */
    public countCharacters(): number {
        return this.text.length;
    }
}
