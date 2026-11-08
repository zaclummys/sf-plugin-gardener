import { z } from 'zod';
import type { Rule } from '@sf-plugin-gardener/core';
import { ApiVersion } from '../metadata/index.js';
import { MaxApiVersionRule } from './max-api-version.js';
import { MaxFilesRule } from './max-files.js';
import { MaxSizeRule } from './max-size.js';
import { MinApiVersionRule } from './min-api-version.js';

const maxFiles = z.object({
    severity: z.enum([
        'error',
        'warn',
    ]),
    max: z.number(),
}).transform((properties) => new MaxFilesRule(properties));

const maxSize = z.object({
    severity: z.enum([
        'error',
        'warn',
    ]),
    maxInMegabytes: z.number(),
}).transform((properties) => new MaxSizeRule(properties));

const apiVersion = z.string()
    .regex(/^\d+(\.\d+)?$/)
    .transform((text) => ApiVersion.from(text));

const minApiVersion = z.object({
    severity: z.enum([
        'error',
        'warn',
    ]),
    minVersion: apiVersion,
}).transform((properties) => new MinApiVersionRule(properties));

const maxApiVersion = z.object({
    severity: z.enum([
        'error',
        'warn',
    ]),
    maxVersion: apiVersion,
}).transform((properties) => new MaxApiVersionRule(properties));

/** The rules of the project namespace, by their full name. Each one is the schema that reads its entry and builds the rule. */
export const projectRules = new Map<string, z.ZodType<Rule<unknown>>>([
    [
        'project/max-files',
        maxFiles,
    ],
    [
        'project/max-size',
        maxSize,
    ],
    [
        'project/min-api-version',
        minApiVersion,
    ],
    [
        'project/max-api-version',
        maxApiVersion,
    ],
]);
