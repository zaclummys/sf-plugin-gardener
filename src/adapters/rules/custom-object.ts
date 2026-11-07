import { z } from 'zod';
import type { Rule } from '../../core/index.js';
import { DeploymentStatusDeployedRule } from '../../rules/custom-object/deployment-status-deployed.js';

const severity = z.enum([
    'error',
    'warn',
]);

const deploymentStatusDeployed = z.union([
    severity.transform((level) => ({
        severity: level,
    })),
    z.object({
        severity,
    }),
]).transform((properties) => new DeploymentStatusDeployedRule(properties));

/** The rules of the custom-object namespace, by their full name. Each one is the schema that reads its entry and builds the rule. */
export const customObjectRules = new Map<string, z.ZodType<Rule>>([
    [
        'custom-object/deployment-status-deployed',
        deploymentStatusDeployed,
    ],
]);
