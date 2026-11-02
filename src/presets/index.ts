import { recommended } from './recommended.js';

export const presets = new Map<string, Record<string, unknown>>([
    [
        'recommended',
        recommended,
    ],
]);
