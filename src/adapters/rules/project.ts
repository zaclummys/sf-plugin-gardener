import { z } from 'zod';
import type { Rule } from '../../core/index.js';
import { MaxFilesRule } from '../../rules/project/max-files.js';

const maxFiles = z.object({
    severity: z.enum([
        'error',
        'warn',
    ]),
    max: z.number(),
}).transform((properties) => new MaxFilesRule(properties));

/** The rules of the project namespace, by their full name. Each one is the schema that reads its entry and builds the rule. */
export const projectRules = new Map<string, z.ZodType<Rule>>([
    [
        'project/max-files',
        maxFiles,
    ],
]);
