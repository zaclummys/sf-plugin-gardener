import { z } from 'zod';
import { defineSeverityOnlySchema, severitySchema, type Rule } from '@sf-plugin-gardener/core';
import { DescriptionLength } from './metadata/index.js';
import { ComplianceGroupRequiredRule, DescriptionRequiredRule, PicklistRestrictedRule, SecurityClassificationRequiredRule } from './rules/index.js';

const descriptionRequired = z.object({
    severity: severitySchema,
    minLength: z.number().transform((characters) => new DescriptionLength(characters)),
}).transform((properties) => new DescriptionRequiredRule(properties));

const securityClassificationRequired = defineSeverityOnlySchema((properties) => new SecurityClassificationRequiredRule(properties));

const complianceGroupRequired = defineSeverityOnlySchema((properties) => new ComplianceGroupRequiredRule(properties));

const picklistRestricted = defineSeverityOnlySchema((properties) => new PicklistRestrictedRule(properties));

/** The rules of the custom-field namespace, by their full name. Each one is the schema that reads its entry and builds the rule. */
export const customFieldRules = new Map<string, z.ZodType<Rule<unknown>>>([
    [
        'custom-field/description-required',
        descriptionRequired,
    ],
    [
        'custom-field/security-classification-required',
        securityClassificationRequired,
    ],
    [
        'custom-field/compliance-group-required',
        complianceGroupRequired,
    ],
    [
        'custom-field/picklist-restricted',
        picklistRestricted,
    ],
]);
