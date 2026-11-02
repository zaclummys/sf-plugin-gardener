export class ProjectFile {
    private readonly path: string;
    private readonly size: number;
    private readonly apiVersion: string | null;

    /**
     * @param path The path of the file, relative to the project.
     * @param size The size of the file, in bytes.
     * @param apiVersion The apiVersion that the file declares, or null when it declares none.
     */
    public constructor({
        path, size, apiVersion,
    }: {
        path: string;
        size: number;
        apiVersion: string | null;
    }) {
        this.path = path;
        this.size = size;
        this.apiVersion = apiVersion;
    }

    /** Returns the path of the file, relative to the project. */
    public getPath(): string {
        return this.path;
    }

    /** Returns the size of the file, in bytes. */
    public getSize(): number {
        return this.size;
    }

    /** Returns the apiVersion that the file declares, or null when it declares none. */
    public getApiVersion(): string | null {
        return this.apiVersion;
    }

    /**
     * Tells whether the file declares an apiVersion below a version.
     *
     * @param version The version to compare with.
     */
    public hasApiVersionBelow(version: string): boolean {
        return this.apiVersion !== null && Number(this.apiVersion) < Number(version);
    }

    /**
     * Tells whether the file declares an apiVersion above a version.
     *
     * @param version The version to compare with.
     */
    public hasApiVersionAbove(version: string): boolean {
        return this.apiVersion !== null && Number(this.apiVersion) > Number(version);
    }
}
