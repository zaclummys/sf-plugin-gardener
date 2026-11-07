export class Component {
    private readonly name: string;
    private readonly type: string;
    private readonly path: string;
    private readonly size: number;
    private readonly child: boolean;
    private readonly content: Record<string, unknown>;

    /**
     * @param name The full name of the component, such as Sample__c.Code__c.
     * @param type The metadata type of the component, such as CustomField.
     * @param path The path of the component file, relative to the project.
     * @param size The size of the component files, in bytes.
     * @param child Whether the component is a child of another one, such as a field of an object.
     * @param content The parsed content of the component file.
     */
    public constructor({
        name, type, path, size, child, content,
    }: {
        name: string;
        type: string;
        path: string;
        size: number;
        child: boolean;
        content: Record<string, unknown>;
    }) {
        this.name = name;
        this.type = type;
        this.path = path;
        this.size = size;
        this.child = child;
        this.content = content;
    }

    /** Returns the full name of the component, such as Sample__c.Code__c. */
    public getName(): string {
        return this.name;
    }

    /** Returns the path of the component file, relative to the project. */
    public getPath(): string {
        return this.path;
    }

    /** Returns the metadata type of the component, such as CustomField. */
    public getType(): string {
        return this.type;
    }

    /** Returns the size of the component files, in bytes. */
    public getSize(): number {
        return this.size;
    }

    /** Tells whether the component is a child of another one. */
    public isChild(): boolean {
        return this.child;
    }

    /** Returns the parsed content of the component file. */
    public getContent(): Record<string, unknown> {
        return this.content;
    }

    /**
     * Tells whether the component has a metadata type.
     *
     * @param type The metadata type to compare with, such as CustomField.
     */
    public hasType(type: string): boolean {
        return this.type === type;
    }
}
