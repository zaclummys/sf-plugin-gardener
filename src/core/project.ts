export class Project {
    private readonly directory: string;

    public constructor(directory: string) {
        this.directory = directory;
    }

    /** Returns the directory that holds the sfdx-project.json. */
    public getDirectory(): string {
        return this.directory;
    }
}
