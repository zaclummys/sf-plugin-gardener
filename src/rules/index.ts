import type { RuleFactory } from '../core/index.js';
import { MaxFilesRule } from './project/max-files.js';

export const ruleFactories = new Map<string, RuleFactory>([
    [
        'project/max-files',
        (entry) => new MaxFilesRule({
            severity: entry.severity,
            max: Number(entry.max),
        }),
    ],
]);
