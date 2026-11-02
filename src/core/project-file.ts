export class ProjectFile {
    private readonly size: number;

    public constructor({ size }: { size: number }) {
        this.size = size;
    }

    /** Returns the size of the file, in bytes. */
    public getSize(): number {
        return this.size;
    }
}
