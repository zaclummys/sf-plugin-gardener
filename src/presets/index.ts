import type { Rule } from '../core/index.js';
import { recommended } from './recommended.js';

export const presets = new Map<string, Rule[]>([
    [
        'recommended',
        recommended,
    ],
]);
