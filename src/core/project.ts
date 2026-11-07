import type { CustomObjects } from './custom-objects.js';
import type { ProjectFile } from './project-file.js';

export class Project {
    private readonly directory: string;
    private readonly files: ProjectFile[];
    private readonly customObjects: CustomObjects;

    /**
     * @param directory The directory that holds the sfdx-project.json.
     * @param files The metadata files of the package directories that are linted.
     * @param customObjects The custom objects of the package directories that are linted.
     */
    public constructor({
        directory, files, customObjects,
    }: {
        directory: string;
        files: ProjectFile[];
        customObjects: CustomObjects;
    }) {
        this.directory = directory;
        this.files = files;
        this.customObjects = customObjects;
    }

    /** Returns the directory that holds the sfdx-project.json. */
    public getDirectory(): string {
        return this.directory;
    }

    /** Lists the metadata files that are linted. */
    public listFiles(): ProjectFile[] {
        return this.files;
    }

    /** Returns the custom objects that are linted. */
    public getCustomObjects(): CustomObjects {
        return this.customObjects;
    }

    /** Counts the metadata files that are linted. */
    public countFiles(): number {
        return this.files.length;
    }

    /** Sums the size of the metadata files that are linted, in bytes. */
    public sumSizes(): number {
        return this.files.reduce((total, file) => total + file.getSize(), 0);
    }
}
