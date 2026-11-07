/** Reads what a component holds, only when a rule asks for it. */
export interface ComponentFileReader {
    /** Reads and parses the content of the component files. */
    readContent(): unknown;

    /** Measures the size of the component files, in bytes. */
    measureSize(): number;
}

export class ComponentFile {
    private readonly name: string;
    private readonly type: string;
    private readonly path: string;
    private readonly child: boolean;
    private readonly reader: ComponentFileReader;

    /**
     * @param name The full name of the component, such as Sample__c.Code__c.
     * @param type The metadata type of the component, such as CustomField.
     * @param path The path of the component file, relative to the project.
     * @param child Whether the component is a child of another one, such as a field of an object.
     * @param reader Reads the content and measures the size of the component, when asked.
     */
    public constructor({
        name, type, path, child, reader,
    }: {
        name: string;
        type: string;
        path: string;
        child: boolean;
        reader: ComponentFileReader;
    }) {
        this.name = name;
        this.type = type;
        this.path = path;
        this.child = child;
        this.reader = reader;
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

    /** Tells whether the component is a child of another one. */
    public isChild(): boolean {
        return this.child;
    }

    /** Reads the parsed content of the component file. */
    public getContent(): unknown {
        return this.reader.readContent();
    }

    /** Measures the size of the component files, in bytes. */
    public getSize(): number {
        return this.reader.measureSize();
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
