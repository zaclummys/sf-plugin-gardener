import type { ProjectFile } from './project-file.js';

export class Project {
    private readonly directory: string;
    private readonly files: ProjectFile[];

    /**
     * @param directory The directory that holds the sfdx-project.json.
     * @param files The metadata files of the package directories that are linted.
     */
    public constructor({
        directory, files,
    }: {
        directory: string;
        files: ProjectFile[];
    }) {
        this.directory = directory;
        this.files = files;
    }

    /** Returns the directory that holds the sfdx-project.json. */
    public getDirectory(): string {
        return this.directory;
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
