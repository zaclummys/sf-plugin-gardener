import { z } from 'zod';
import { DescriptionLength, type Rule } from '../../core/index.js';
import { DescriptionRequiredRule } from '../../rules/custom-field/description-required.js';

const severity = z.enum([
    'error',
    'warn',
]);

const descriptionRequired = z.object({
    severity,
    minLength: z.number().transform((characters) => new DescriptionLength(characters)),
}).transform((properties) => new DescriptionRequiredRule(properties));

/** The rules of the custom-field namespace, by their full name. Each one is the schema that reads its entry and builds the rule. */
export const customFieldRules = new Map<string, z.ZodType<Rule>>([
    [
        'custom-field/description-required',
        descriptionRequired,
    ],
]);
