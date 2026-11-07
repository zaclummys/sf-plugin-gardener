import type { Project } from '@sf-plugin-gardener/core';
import type { ApiVersion } from './api-version.js';
import { ProjectFile } from './project-file.js';

export class ProjectFiles {
    private readonly files: ProjectFile[];

    /** @param files The metadata files of the package directories that are linted. */
    public constructor({ files }: { files: ProjectFile[] }) {
        this.files = files;
    }

    /**
     * Builds the metadata files of a project.
     *
     * @param project The project whose components hold the files.
     */
    public static from({ project }: { project: Project }): ProjectFiles {
        const components = project.getComponents();
        const files = components.listRoots().map((component) => ProjectFile.from({
            component,
        }));

        return new ProjectFiles({
            files,
        });
    }

    /** Counts the metadata files. */
    public countFiles(): number {
        return this.files.length;
    }

    /** Sums the size of the metadata files, in bytes. */
    public sumSizes(): number {
        return this.files.reduce((total, file) => total + file.getSize(), 0);
    }

    /**
     * Lists the files that declare an apiVersion below a version.
     *
     * @param version The version to compare with.
     */
    public listWithApiVersionBelow(version: ApiVersion): ProjectFile[] {
        return this.files.filter((file) => file.hasApiVersionBelow(version));
    }

    /**
     * Lists the files that declare an apiVersion above a version.
     *
     * @param version The version to compare with.
     */
    public listWithApiVersionAbove(version: ApiVersion): ProjectFile[] {
        return this.files.filter((file) => file.hasApiVersionAbove(version));
    }
}
