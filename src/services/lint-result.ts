import type { Finding } from '../core/index.js';

export class LintResult {
    private readonly files: number;
    private readonly findings: Finding[];

    public constructor({
        files, findings,
    }: {
        files: number;
        findings: Finding[];
    }) {
        this.files = files;
        this.findings = findings;
    }

    /** Counts the metadata files that were linted. */
    public countFiles(): number {
        return this.files;
    }

    /** Counts the findings that are errors. */
    public countErrors(): number {
        const errors = this.findings.filter((finding) => finding.isError());

        return errors.length;
    }

    /** Counts the findings that are warnings. */
    public countWarnings(): number {
        const warnings = this.findings.filter((finding) => finding.isWarning());

        return warnings.length;
    }

    /** Lists the findings. */
    public listFindings(): Finding[] {
        return this.findings;
    }
}
