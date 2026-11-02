import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { z } from 'zod';
import { Configuration, type Project, type Rule, type Severity } from '../core/index.js';
import { presets } from '../presets/index.js';
import { MaxFilesRule } from '../rules/project/max-files.js';
import type { ConfigurationFinder, ConfigurationFindOutput } from '../services/adapters/index.js';

/** The entry of a rule in the configuration file. */
type RuleEntry = {
    severity: Severity;
    [property: string]: unknown;
};

/** Builds a rule from its entry in the configuration file. */
type RuleFactory = (entry: RuleEntry) => Rule;

const schema = z.object({
    extends: z.array(z.string()).default([]),
    rules: z.record(z.string(), z.looseObject({
        severity: z.enum([
            'error',
            'warn',
        ]),
    })).default({}),
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
    private readonly ruleFactories: Map<string, RuleFactory>;
    private readonly presets: Map<string, Rule[]>;

    /**
     * @param ruleFactories The rules that exist, by name, with the way to build each one.
     * @param presets The presets that exist, by name, with the rules of each one.
     */
    public constructor({
        ruleFactories, presets,
    }: {
        ruleFactories: Map<string, RuleFactory>;
        presets: Map<string, Rule[]>;
    }) {
        this.ruleFactories = ruleFactories;
        this.presets = presets;
    }

    /**
     * Builds a configuration from the configurationParseOutput content of its file. The rules of the presets
     * it extends come first, and a rule of its own replaces the one of a preset with the same name.
     *
     * @param content The configurationParseOutput content of the configuration file.
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

    private buildProjectRules(entries: Record<string, RuleEntry>): Rule[] {
        const rules: Rule[] = [];

        for (const [
            name,
            create,
        ] of this.ruleFactories) {
            if (Object.hasOwn(entries, name)) {
                rules.push(create(entries[name]));
            }
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

const ruleFactories = new Map<string, RuleFactory>([
    [
        'project/max-files',
        (entry) => new MaxFilesRule({
            severity: entry.severity,
            max: Number(entry.max),
        }),
    ],
]);

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
            ruleFactories,
            presets,
        });

        return configurationParser.parse(content);
    }
}
