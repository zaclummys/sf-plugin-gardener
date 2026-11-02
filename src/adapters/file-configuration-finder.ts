import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { Configuration, type ConfigurationParseResult, type Project } from '../core/index.js';
import type { ConfigurationFinder, ConfigurationFindResult } from '../services/adapters/index.js';

export class FileConfigurationFinder implements ConfigurationFinder {
    /**
     * Finds the configuration of a project.
     *
     * @param project The project to look in.
     * @param fileName The name of the configuration file.
     * @returns The configuration, or the reason it could not be found or read.
     */
    public async find({
        project, fileName,
    }: {
        project: Project;
        fileName: string;
    }): Promise<ConfigurationFindResult> {
        const file = path.join(project.getDirectory(), fileName);

        if (!existsSync(file)) {
            return {
                success: false,
                error: 'configuration-not-found',
                directory: project.getDirectory(),
            };
        }

        const text = await readFile(file, 'utf8');

        const outcome = FileConfigurationFinder.parse(text);

        if (!outcome.success && outcome.error === 'invalid-configuration') {
            return {
                success: false,
                error: outcome.error,
                file,
            };
        }

        return outcome;
    }

    private static parse(text: string): ConfigurationParseResult {
        try {
            const content: unknown = JSON.parse(text);

            return Configuration.parse(content);
        } catch {
            return {
                success: false,
                error: 'invalid-configuration',
            };
        }
    }
}
