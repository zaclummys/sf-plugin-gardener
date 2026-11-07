import { z } from 'zod';
import { defineSeverityOnlySchema, severitySchema, type Rule } from '@sf-plugin-gardener/core';
import { DescriptionLength } from './description-length.js';
import { ComplianceGroupRequiredRule } from './rules/compliance-group-required.js';
import { DescriptionRequiredRule } from './rules/description-required.js';
import { PicklistRestrictedRule } from './rules/picklist-restricted.js';
import { SecurityClassificationRequiredRule } from './rules/security-classification-required.js';

const descriptionRequired = z.object({
    severity: severitySchema,
    minLength: z.number().transform((characters) => new DescriptionLength(characters)),
}).transform((properties) => new DescriptionRequiredRule(properties));

const securityClassificationRequired = defineSeverityOnlySchema((properties) => new SecurityClassificationRequiredRule(properties));

const complianceGroupRequired = defineSeverityOnlySchema((properties) => new ComplianceGroupRequiredRule(properties));

const picklistRestricted = defineSeverityOnlySchema((properties) => new PicklistRestrictedRule(properties));

/** The rules of the custom-field namespace, by their full name. Each one is the schema that reads its entry and builds the rule. */
export const customFieldRules = new Map<string, z.ZodType<Rule>>([
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
