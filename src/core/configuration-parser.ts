import { z } from 'zod';
import { Configuration } from './configuration.js';
import type { Rule, RuleEntry, RuleFactory } from './rule.js';

const schema = z.object({
    extends: z.array(z.string()).default([]),
    rules: z.record(z.string(), z.looseObject({
        severity: z.enum([
            'error',
            'warn',
        ]),
    })).default({}),
});

export type ConfigurationParseOutput =
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

export class ConfigurationParser {
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

        const presets = this.resolvePresets(file.data.extends);

        if (!presets.success) {
            return {
                success: false,
                error: 'preset-not-found',
                preset: presets.preset,
            };
        }

        const projectRules = this.buildProjectRules(file.data.rules);
        const rules = ConfigurationParser.mergeByName([
            ...presets.rules,
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
