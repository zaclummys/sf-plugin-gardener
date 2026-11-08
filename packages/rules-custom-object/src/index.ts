import { z } from 'zod';
import { defineSeverityOnlySchema, severitySchema, type Rule } from '@sf-plugin-gardener/core';
import { SharingModel, SharingModels } from './metadata/index.js';
import { DeploymentStatusDeployedRule, ForbiddenSharingModelsRule } from './rules/index.js';

const deploymentStatusDeployed = defineSeverityOnlySchema((properties) => new DeploymentStatusDeployedRule(properties));

const sharingModels = z.array(z.string())
    .transform((texts) => texts.map((text) => new SharingModel(text)))
    .transform((models) => new SharingModels({
        models,
    }));

const forbiddenSharingModels = z.object({
    severity: severitySchema,
    forbiddenModels: sharingModels,
}).transform((properties) => new ForbiddenSharingModelsRule(properties));

/** The rules of the custom-object namespace, by their full name. Each one is the schema that reads its entry and builds the rule. */
export const customObjectRules = new Map<string, z.ZodType<Rule<unknown>>>([
    [
        'custom-object/deployment-status-deployed',
        deploymentStatusDeployed,
    ],
    [
        'custom-object/forbidden-sharing-models',
        forbiddenSharingModels,
    ],
]);
