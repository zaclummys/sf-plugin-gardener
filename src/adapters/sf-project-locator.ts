import { existsSync } from 'node:fs';
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { SfProject } from '@salesforce/core';
import { metadataTypes, Project, ProjectFile } from '../core/index.js';
import type { ProjectLocateOutput, ProjectLocator } from '../services/adapters/index.js';

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
     * @returns The project, or the reason it could not be found or read.
     */
    public async locate(directory: string): Promise<ProjectLocateOutput> {
        const sfProject = await resolveSfProject(directory);

        if (!sfProject) {
            return {
                success: false,
                error: 'project-not-found',
                directory,
            };
        }

        const projectDirectory = sfProject.getPath();
        const projectJson = sfProject
            .getSfProjectJson()
            .getContents();

        const packageDirectories = projectJson.packageDirectories;
        const files: ProjectFile[] = [];

        for (const packageDirectory of packageDirectories) {
            const fullPath = path.resolve(projectDirectory, packageDirectory.path);

            if (!existsSync(fullPath)) {
                return {
                    success: false,
                    error: 'package-directory-not-found',
                    directory: fullPath,
                };
            }

            const entries = await readdir(fullPath, {
                recursive: true,
                withFileTypes: true,
            });
            const paths = entries
                .filter((entry) => entry.isFile())
                .map((entry) => path.join(entry.parentPath, entry.name))
                .filter((file) => metadataTypes.some((type) => type.matches(file)));

            for (const file of paths) {
                const fileStat = await stat(file);

                files.push(new ProjectFile({
                    size: fileStat.size,
                }));
            }
        }

        return {
            success: true,
            project: new Project({
                directory: projectDirectory,
                files,
            }),
        };
    }
}
