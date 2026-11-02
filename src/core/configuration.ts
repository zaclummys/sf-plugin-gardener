import { z } from 'zod';
import { presets } from './presets/index.js';

const schema = z.object({
    extends: z.array(z.string()).default([]),
    rules: z.record(z.string(), z.unknown()).default({}),
});

export type ConfigurationParseResult =
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

export class Configuration {
    public readonly rules: Record<string, unknown>;

    private constructor(rules: Record<string, unknown>) {
        this.rules = rules;
    }

    /**
     * Builds a configuration from the parsed content of its file. The presets it extends
     * are applied first, and its own rules after them.
     *
     * @param content The parsed content of the configuration file.
     */
    public static parse(content: unknown): ConfigurationParseResult {
        const result = schema.safeParse(content);

        if (!result.success) {
            return {
                success: false,
                error: 'invalid-configuration',
            };
        }

        const rules: Record<string, unknown> = {};

        for (const name of result.data.extends) {
            const preset = presets.get(name);

            if (!preset) {
                return {
                    success: false,
                    error: 'preset-not-found',
                    preset: name,
                };
            }

            Object.assign(rules, preset);
        }

        Object.assign(rules, result.data.rules);

        return {
            success: true,
            configuration: new Configuration(rules),
        };
    }
}
