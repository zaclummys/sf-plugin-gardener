export class DescriptionLength {
    private readonly characters: number;

    public constructor(characters: number) {
        this.characters = characters;
    }

    /**
     * Tells whether this length is greater than a count of characters.
     *
     * @param characters The count to compare with.
     */
    public exceeds(characters: number): boolean {
        return this.characters > characters;
    }

    /** Formats the length as a count of characters, such as 20 characters. */
    public toString(): string {
        return `${this.characters} characters`;
    }
}
