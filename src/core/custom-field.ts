import type { Description } from './description.js';
import type { DescriptionLength } from './description-length.js';

export class CustomField {
    private readonly name: string;
    private readonly path: string;
    private readonly description: Description | null;

    /**
     * @param name The full name of the field, such as Sample__c.Code__c.
     * @param path The path of the field file, relative to the project.
     * @param description The description that the field declares, or null when it declares none.
     */
    public constructor({
        name, path, description,
    }: {
        name: string;
        path: string;
        description: Description | null;
    }) {
        this.name = name;
        this.path = path;
        this.description = description;
    }

    /** Returns the full name of the field, such as Sample__c.Code__c. */
    public getName(): string {
        return this.name;
    }

    /** Returns the path of the field file, relative to the project. */
    public getPath(): string {
        return this.path;
    }

    /** Tells whether the field declares no description. */
    public isUndescribed(): boolean {
        return this.description == null;
    }

    /**
     * Tells whether the field declares a description shorter than a length.
     *
     * @param length The length to compare with.
     */
    public hasDescriptionShorterThan(length: DescriptionLength): boolean {
        return this.description != null && length.exceeds(this.description.countCharacters());
    }
}
