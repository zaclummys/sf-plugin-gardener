import { metadataTypes } from './metadata-types.js';

export class Project {
    private readonly directory: string;
    private readonly files: string[];

    /**
     * @param directory The directory that holds the sfdx-project.json.
     * @param files The paths of the files of the package directories. Only the metadata files that are linted are kept.
     */
    public constructor({
        directory, files,
    }: {
        directory: string;
        files: string[];
    }) {
        this.directory = directory;
        this.files = files.filter((file) => metadataTypes.some((type) => type.matches(file)));
    }

    /** Returns the directory that holds the sfdx-project.json. */
    public getDirectory(): string {
        return this.directory;
    }

    /** Counts the metadata files that are linted. */
    public countFiles(): number {
        return this.files.length;
    }
}
