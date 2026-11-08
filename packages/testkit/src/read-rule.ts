import type { Rule } from '@sf-plugin-gardener/core';

type RuleSchema = {
    safeParse(entry: unknown): {
        success: true;
        data: Rule<unknown>;
    } | {
        success: false;
    };
};

/**
 * Reads the entry of a rule in the configuration, the way the plugin does.
 *
 * @param schemas The schemas of the rules of a group, by name.
 * @param name The full name of the rule.
 * @param entry The value that the configuration file holds for the rule.
 * @returns The rule, or null when the schema rejects the entry.
 */
export function readRule({
    schemas, name, entry,
}: {
    schemas: Map<string, RuleSchema>;
    name: string;
    entry: unknown;
}): Rule<unknown> | null {
    const schema = schemas.get(name);
    const parsed = schema?.safeParse(entry);

    if (!parsed?.success) {
        return null;
    }

    return parsed.data;
}
