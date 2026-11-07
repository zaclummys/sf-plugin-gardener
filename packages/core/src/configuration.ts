import type { Finding } from './finding.js';
import type { ComponentFiles } from './component-files.js';
import type { Rule } from './rule.js';

export class Configuration {
    private readonly rules: Rule<unknown>[];

    public constructor({ rules }: { rules: Rule<unknown>[] }) {
        this.rules = rules;
    }

    /**
     * Checks the components with the rules that the configuration enables.
     *
     * @param componentFiles The components to check.
     */
    public check(componentFiles: ComponentFiles): Finding[] {
        return this.rules.flatMap((rule) => rule.run(componentFiles));
    }
}
