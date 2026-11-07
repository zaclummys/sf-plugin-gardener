import type { Project } from '../project.js';

export type ProjectLocateOutput =
    | {
        success: true;
        project: Project;
    }
    | {
        success: false;
        error: 'project-not-found';
        directory: string;
    }
    | {
        success: false;
        error: 'package-directory-not-found';
        directory: string;
    };

export type ProjectLocator = {
    /**
     * Finds the project that holds the directory, with the files of its package directories.
     *
     * @param directory The directory to start from. The search goes up from it.
     * @returns The project, or the reason it could not be found or read.
     */
    locate(directory: string): Promise<ProjectLocateOutput>;
};
