import { Finding, type Severity } from './finding.js';
import type { Components } from './components.js';

export abstract class Rule<Input> {
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
     * Reads from the components what the rule checks.
     *
     * @param components The components to read from.
     */
    protected abstract read(components: Components): Input;

    /**
     * Checks the input and reports what the rule finds.
     *
     * @param input The input to check.
     */
    public abstract check(input: Input): Finding[];

    /**
     * Reads the input from the components, checks it and reports what the rule finds.
     *
     * @param components The components to run the rule on.
     */
    public run(components: Components): Finding[] {
        const input = this.read(components);

        return this.check(input);
    }

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
            file: null,
        });
    }

    /**
     * Builds a finding of this rule about a file, with the severity that the configuration gave it.
     *
     * @param message The message of the finding.
     * @param file The path of the file, relative to the project.
     */
    protected reportFile({
        message, file,
    }: {
        message: string;
        file: string;
    }): Finding {
        return new Finding({
            rule: this.name,
            severity: this.severity,
            message,
            file,
        });
    }
}
