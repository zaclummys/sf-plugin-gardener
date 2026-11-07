import { z } from 'zod';
import type { Rule, Severity } from '../../core/index.js';

/** The severities that a rule entry accepts. */
export const severity = z.enum([
    'error',
    'warn',
]);

/**
 * Defines the schema of a rule that has only a severity. The entry is the severity itself or an object that holds it.
 *
 * @param build Builds the rule from its severity.
 */
export function defineSeverityOnlySchema(build: (properties: { severity: Severity }) => Rule): z.ZodType<Rule> {
    return z.union([
        severity.transform((level) => ({
            severity: level,
        })),
        z.object({
            severity,
        }),
    ]).transform((properties) => build(properties));
}
