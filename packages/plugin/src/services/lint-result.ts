import type { Finding } from '@sf-plugin-gardener/core';

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

    /**
     * Tells whether the lint failed. An error fails it, and so does a warning when it is strict.
     *
     * @param strict Treats warnings as errors.
     */
    public hasFailed(strict: boolean): boolean {
        return this.countErrors() > 0 || (strict && this.countWarnings() > 0);
    }

    /** Lists the findings. */
    public listFindings(): Finding[] {
        return this.findings;
    }
}
