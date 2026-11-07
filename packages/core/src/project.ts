import type { Components } from './components.js';

export class Project {
    private readonly directory: string;
    private readonly components: Components;

    /**
     * @param directory The directory that holds the sfdx-project.json.
     * @param components The components of the package directories that are linted, with the children of each one.
     */
    public constructor({
        directory, components,
    }: {
        directory: string;
        components: Components;
    }) {
        this.directory = directory;
        this.components = components;
    }

    /** Returns the directory that holds the sfdx-project.json. */
    public getDirectory(): string {
        return this.directory;
    }

    /** Returns the components that are linted. */
    public getComponents(): Components {
        return this.components;
    }
}
