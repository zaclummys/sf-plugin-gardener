import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { z } from 'zod';
import { Configuration, type Project, type Rule } from '../core/index.js';
import { presets } from '../presets/index.js';
import type { ConfigurationFinder, ConfigurationFindOutput } from '../services/adapters/index.js';
import { ruleSchemas } from './rules/index.js';

const schema = z.object({
    extends: z.array(z.string()).default([]),
    rules: z.record(z.string(), z.unknown()).default({}),
});

type ConfigurationParseOutput =
    | {
        success: true;
        configuration: Configuration;
    }
    | {
        success: false;
        error: 'invalid-configuration';
    }
    | {
        success: false;
        error: 'preset-not-found';
        preset: string;
    };

type PresetResolveOutput =
    | {
        success: true;
        rules: Rule[];
    }
    | {
        success: false;
        preset: string;
    };

class ConfigurationParser {
    private readonly ruleSchemas: Map<string, z.ZodType<Rule>>;
    private readonly presets: Map<string, Rule[]>;

    /**
     * @param ruleSchemas The schemas of the rules that exist, by name. Each one builds its rule.
     * @param presets The presets that exist, by name, with the rules of each one.
     */
    public constructor({
        ruleSchemas, presets,
    }: {
        ruleSchemas: Map<string, z.ZodType<Rule>>;
        presets: Map<string, Rule[]>;
    }) {
        this.ruleSchemas = ruleSchemas;
        this.presets = presets;
    }

    /**
     * Builds a configuration from the parsed content of its file. The rules of the presets
     * it extends come first, and a rule of its own replaces the one of a preset with the same name.
     *
     * @param content The parsed content of the configuration file.
     */
    public parse(content: unknown): ConfigurationParseOutput {
        const file = schema.safeParse(content);

        if (!file.success) {
            return {
                success: false,
                error: 'invalid-configuration',
            };
        }

        const presetResolveOutput = this.resolvePresets(file.data.extends);

        if (!presetResolveOutput.success) {
            return {
                success: false,
                error: 'preset-not-found',
                preset: presetResolveOutput.preset,
            };
        }

        const projectRules = this.buildProjectRules(file.data.rules);

        if (!projectRules) {
            return {
                success: false,
                error: 'invalid-configuration',
            };
        }

        const rules = ConfigurationParser.mergeByName([
            ...presetResolveOutput.rules,
            ...projectRules,
        ]);

        return {
            success: true,
            configuration: new Configuration({
                rules,
            }),
        };
    }

    private resolvePresets(names: string[]): PresetResolveOutput {
        const rules: Rule[] = [];

        for (const name of names) {
            const preset = this.presets.get(name);

            if (!preset) {
                return {
                    success: false,
                    preset: name,
                };
            }

            rules.push(...preset);
        }

        return {
            success: true,
            rules,
        };
    }

    private buildProjectRules(entries: Record<string, unknown>): Rule[] | null {
        const rules: Rule[] = [];

        for (const [
            name,
            ruleSchema,
        ] of this.ruleSchemas) {
            if (!Object.hasOwn(entries, name)) {
                continue;
            }

            const rule = ruleSchema.safeParse(entries[name]);

            if (!rule.success) {
                return null;
            }

            rules.push(rule.data);
        }

        return rules;
    }

    private static mergeByName(rules: Rule[]): Rule[] {
        const byName = new Map<string, Rule>();

        for (const rule of rules) {
            byName.set(rule.getName(), rule);
        }

        return [...byName.values()];
    }
}

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
        const configurationParseOutput = FileConfigurationFinder.parse(text);

        if (!configurationParseOutput.success && configurationParseOutput.error === 'invalid-configuration') {
            return {
                success: false,
                error: configurationParseOutput.error,
                file,
            };
        }

        return configurationParseOutput;
    }

    private static parse(text: string): ConfigurationParseOutput {
        const content = parseJson(text);
        const configurationParser = new ConfigurationParser({
            ruleSchemas,
            presets,
        });

        return configurationParser.parse(content);
    }
}
