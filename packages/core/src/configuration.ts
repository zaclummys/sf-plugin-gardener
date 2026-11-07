import type { Finding } from './finding.js';
import type { Components } from './components.js';
import type { Rule } from './rule.js';

export class Configuration {
    private readonly rules: Rule<unknown>[];

    public constructor({ rules }: { rules: Rule<unknown>[] }) {
        this.rules = rules;
    }

    /**
     * Checks the components with the rules that the configuration enables.
     *
     * @param components The components to check.
     */
    public check(components: Components): Finding[] {
        return this.rules.flatMap((rule) => rule.run(components));
    }
}
