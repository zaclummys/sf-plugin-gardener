import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { Configuration, type Project } from '../core/index.js';

export type ConfigurationSearch = {
    file: string;
    exists: boolean;
    configuration: Configuration | null;
};

export class ConfigurationFinder {
    /**
     * Finds the configuration of a project.
     *
     * @param project The project to look in.
     * @param fileName The name of the configuration file.
     * @returns The configuration file, whether it exists, and the configuration read from it when it is valid.
     */
    public async find({
        project, fileName,
    }: {
        project: Project;
        fileName: string;
    }): Promise<ConfigurationSearch> {
        const file = path.join(project.getDirectory(), fileName);

        if (!existsSync(file)) {
            return {
                file,
                exists: false,
                configuration: null,
            };
        }

        const text = await readFile(file, 'utf8');

        return {
            file,
            exists: true,
            configuration: ConfigurationFinder.parse(text),
        };
    }

    private static parse(text: string): Configuration | null {
        try {
            const content: unknown = JSON.parse(text);

            if (typeof content !== 'object' || content == null || Array.isArray(content)) {
                return null;
            }

            return new Configuration(content);
        } catch {
            return null;
        }
    }
}
