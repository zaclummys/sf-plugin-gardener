export type Severity = 'error' | 'warn';

export class Finding {
    private readonly rule: string;
    private readonly severity: Severity;
    private readonly message: string;
    private readonly file: string | null;

    public constructor({
        rule, severity, message, file,
    }: {
        rule: string;
        severity: Severity;
        message: string;
        file: string | null;
    }) {
        this.rule = rule;
        this.severity = severity;
        this.message = message;
        this.file = file;
    }

    /** Tells whether the finding is an error. */
    public isError(): boolean {
        return this.severity === 'error';
    }

    /** Tells whether the finding is a warning. */
    public isWarning(): boolean {
        return this.severity === 'warn';
    }

    /** Returns the name of the rule that reported the finding. */
    public getRule(): string {
        return this.rule;
    }

    /** Returns the severity of the finding. */
    public getSeverity(): Severity {
        return this.severity;
    }

    /** Returns the message of the finding. */
    public getMessage(): string {
        return this.message;
    }

    /** Returns the path of the file of the finding, or null when the finding is about the project as a whole. */
    public getFile(): string | null {
        return this.file;
    }
}
