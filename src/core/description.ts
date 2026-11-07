export class Description {
    private readonly text: string;

    public constructor(text: string) {
        this.text = text;
    }

    /** Counts the characters of the description. */
    public countCharacters(): number {
        return this.text.length;
    }
}
