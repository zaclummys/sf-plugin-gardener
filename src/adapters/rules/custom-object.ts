import { z } from 'zod';
import { SharingModel, SharingModels, type Rule } from '../../core/index.js';
import { DeploymentStatusDeployedRule } from '../../rules/custom-object/deployment-status-deployed.js';
import { ForbiddenSharingModelsRule } from '../../rules/custom-object/forbidden-sharing-models.js';

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

const sharingModels = z.array(z.string())
    .transform((texts) => texts.map((text) => new SharingModel(text)))
    .transform((models) => new SharingModels({
        models,
    }));

const forbiddenSharingModels = z.object({
    severity,
    forbiddenModels: sharingModels,
}).transform((properties) => new ForbiddenSharingModelsRule(properties));

/** The rules of the custom-object namespace, by their full name. Each one is the schema that reads its entry and builds the rule. */
export const customObjectRules = new Map<string, z.ZodType<Rule>>([
    [
        'custom-object/deployment-status-deployed',
        deploymentStatusDeployed,
    ],
    [
        'custom-object/forbidden-sharing-models',
        forbiddenSharingModels,
    ],
]);
