import { SfProject } from '@salesforce/core';
import { Project } from '../core/index.js';

export class ProjectLocator {
    /**
     * Finds the project that holds the directory.
     *
     * @param directory The directory to start from. The search goes up from it.
     * @returns The project, or nothing when no project holds the directory.
     */
    public async locate(directory: string): Promise<Project | undefined> {
        try {
            const projectPath = await SfProject.resolveProjectPath(directory);

            return new Project(projectPath);
        } catch {
            return undefined;
        }
    }
}
