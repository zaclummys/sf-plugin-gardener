import type { ComponentFiles } from '@sf-plugin-gardener/core';

export class Project {
    private readonly directory: string;
    private readonly componentFiles: ComponentFiles;

    /**
     * @param directory The directory that holds the sfdx-project.json.
     * @param componentFiles The components of the package directories that are linted, with the children of each one.
     */
    public constructor({
        directory, componentFiles,
    }: {
        directory: string;
        componentFiles: ComponentFiles;
    }) {
        this.directory = directory;
        this.componentFiles = componentFiles;
    }

    /** Returns the directory that holds the sfdx-project.json. */
    public getDirectory(): string {
        return this.directory;
    }

    /** Returns the components that are linted. */
    public getComponentFiles(): ComponentFiles {
        return this.componentFiles;
    }
}
