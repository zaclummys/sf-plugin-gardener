export class Configuration {
    private readonly content: unknown;

    public constructor(content: unknown) {
        this.content = content;
    }

    /** Returns the content of the configuration. */
    public getContent(): unknown {
        return this.content;
    }
}
