import { z } from 'zod';
import type { Rule } from './rule.js';
import type { Severity } from './finding.js';

/** The severities that a rule entry accepts. */
export const severitySchema = z.enum([
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
        severitySchema.transform((level) => ({
            severity: level,
        })),
        z.object({
            severity: severitySchema,
        }),
    ]).transform((properties) => build(properties));
}
