import { Finding, type Severity } from './finding.js';
import type { Project } from './project.js';

/** The entry of a rule in the configuration file. */
export type RuleEntry = {
    severity: Severity;
    [property: string]: unknown;
};

/** Builds a rule from its entry in the configuration file. */
export type RuleFactory = (entry: RuleEntry) => Rule;

export abstract class Rule {
    private readonly name: string;
    private readonly severity: Severity;

    protected constructor({
        name, severity,
    }: {
        name: string;
        severity: Severity;
    }) {
        this.name = name;
        this.severity = severity;
    }

    /** Returns the name of the rule. */
    public getName(): string {
        return this.name;
    }

    /**
     * Checks a project and reports what the rule finds.
     *
     * @param project The project to check.
     */
    public abstract check({ project }: { project: Project }): Finding[];

    /**
     * Builds a finding of this rule, with the severity that the configuration gave it.
     *
     * @param message The message of the finding.
     */
    protected report({ message }: { message: string }): Finding {
        return new Finding({
            rule: this.name,
            severity: this.severity,
            message,
        });
    }
}
