const configurationFileNames = [
    'sf-plugin-gardener.config.json',
    'sf-plugin-gardener.config.js',
];

export class Project {
    private readonly directory: string;

    public constructor(directory: string) {
        this.directory = directory;
    }

    /** Returns the directory that holds the sfdx-project.json. */
    public getDirectory(): string {
        return this.directory;
    }

    /** Lists the names of the files where the configuration of the project may be. */
    public listConfigurationFileNames(): string[] {
        return configurationFileNames;
    }
}
