import type { Finding } from './finding.js';
import type { Project } from './project.js';
import type { Rule } from './rule.js';

export class Configuration {
    private readonly rules: Rule[];

    public constructor({ rules }: { rules: Rule[] }) {
        this.rules = rules;
    }

    /**
     * Checks a project with the rules that the configuration enables.
     *
     * @param project The project to check.
     */
    public check({ project }: { project: Project }): Finding[] {
        return this.rules.flatMap((rule) => rule.check({
            project,
        }));
    }
}
