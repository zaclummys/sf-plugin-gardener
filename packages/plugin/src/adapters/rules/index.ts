import type { z } from 'zod';
import type { Rule } from '@sf-plugin-gardener/core';
import { customFieldRules } from './custom-field.js';
import { customObjectRules } from './custom-object.js';
import { projectRules } from './project.js';

type RuleSchemas = Map<string, z.ZodType<Rule>>;

/** The plugins that bring the rules. Each one is a namespace and registers its own rules. */
const plugins: RuleSchemas[] = [
    projectRules,
    customObjectRules,
    customFieldRules,
];

/** The schemas of every rule, by the name that the configuration file uses. */
export const ruleSchemas: RuleSchemas = new Map(plugins.flatMap((rules) => [...rules]));
