export class CustomField {
    private readonly name: string;
    private readonly path: string;
    private readonly describedFlag: boolean;

    /**
     * @param name The full name of the field, such as Sample__c.Code__c.
     * @param path The path of the field file, relative to the project.
     * @param described Whether the field declares a description.
     */
    public constructor({
        name, path, described,
    }: {
        name: string;
        path: string;
        described: boolean;
    }) {
        this.name = name;
        this.path = path;
        this.describedFlag = described;
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
        return !this.describedFlag;
    }
}
