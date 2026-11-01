export class Configuration {
    private readonly file: string;

    public constructor(file: string) {
        this.file = file;
    }

    /** Returns the path of the configuration file. */
    public getFile(): string {
        return this.file;
    }
}
