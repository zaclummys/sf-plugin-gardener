import { z } from 'zod';

const schema = z.object({
    rules: z.record(z.string(), z.unknown()).default({}),
});

export class Configuration {
    public readonly rules: Record<string, unknown>;

    private constructor(rules: Record<string, unknown>) {
        this.rules = rules;
    }

    /**
     * Builds a configuration from the parsed content of its file.
     *
     * @param content The parsed content of the configuration file.
     * @returns The configuration, or null when the content is not valid.
     */
    public static from(content: unknown): Configuration | null {
        const result = schema.safeParse(content);

        if (!result.success) {
            return null;
        }

        return new Configuration(result.data.rules);
    }
}
