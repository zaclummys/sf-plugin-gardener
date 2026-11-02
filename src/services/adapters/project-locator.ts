import type { Project } from '../../core/index.js';

export type ProjectLocator = {
    /**
     * Finds the project that holds the directory, with the files of its package directories.
     *
     * @param directory The directory to start from. The search goes up from it.
     * @returns The project, or null when no project holds the directory.
     */
    locate(directory: string): Promise<Project | null>;
};
