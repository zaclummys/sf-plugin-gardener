import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { ConfigurationParser, type ConfigurationParseOutput, type Project } from '../core/index.js';
import { presets } from '../presets/index.js';
import { ruleFactories } from '../rules/index.js';
import type { ConfigurationFinder, ConfigurationFindOutput } from '../services/adapters/index.js';

/** Parses JSON text, and gives null for text that is not valid JSON. */
function parseJson(text: string): unknown {
    try {
        return JSON.parse(text);
    } catch {
        return null;
    }
}

export class FileConfigurationFinder implements ConfigurationFinder {
    /**
     * Finds the configuration of a project, read from its file.
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
    }): Promise<ConfigurationFindOutput> {
        const file = path.join(project.getDirectory(), fileName);

        if (!existsSync(file)) {
            return {
                success: false,
                error: 'configuration-not-found',
                directory: project.getDirectory(),
            };
        }

        const text = await readFile(file, 'utf8');
        const parsed = FileConfigurationFinder.parse(text);

        if (!parsed.success && parsed.error === 'invalid-configuration') {
            return {
                success: false,
                error: parsed.error,
                file,
            };
        }

        return parsed;
    }

    private static parse(text: string): ConfigurationParseOutput {
        const content = parseJson(text);
        const configurationParser = new ConfigurationParser({
            ruleFactories,
            presets,
        });

        return configurationParser.parse(content);
    }
}
