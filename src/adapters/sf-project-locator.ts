import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { SfProject } from '@salesforce/core';
import { Project } from '../core/index.js';
import type { ProjectLocator } from '../services/adapters/index.js';

async function resolveSfProject(directory: string): Promise<SfProject | null> {
    try {
        return await SfProject.resolve(directory);
    } catch {
        return null;
    }
}

export class SfProjectLocator implements ProjectLocator {
    /**
     * Finds the project that holds the directory, with the files of its package directories.
     *
     * @param directory The directory to start from. The search goes up from it.
     * @returns The project, or null when no project holds the directory.
     */
    public async locate(directory: string): Promise<Project | null> {
        const sfProject = await resolveSfProject(directory);

        if (!sfProject) {
            return null;
        }

        const files: string[] = [];

        for (const packageDirectory of sfProject.getUniquePackageDirectories()) {
            const entries = await readdir(packageDirectory.fullPath, {
                recursive: true,
                withFileTypes: true,
            });
            const paths = entries
                .filter((entry) => entry.isFile())
                .map((entry) => path.join(entry.parentPath, entry.name));

            files.push(...paths);
        }

        return new Project({
            directory: sfProject.getPath(),
            files,
        });
    }
}
