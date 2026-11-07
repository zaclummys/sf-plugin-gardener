import type { Rule } from '@sf-plugin-gardener/core';
import { recommended } from './recommended.js';

export const presets = new Map<string, Rule[]>([
    [
        'recommended',
        recommended,
    ],
]);
