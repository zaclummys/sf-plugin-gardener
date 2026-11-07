import { Messages, SfError } from '@salesforce/core';
import { Flags, SfCommand } from '@salesforce/sf-plugins-core';
import { FileConfigurationFinder, SfProjectLocator } from '../../adapters/index.js';
import type { Severity } from '@sf-plugin-gardener/core';
import { LintService, type LintServiceOutput } from '../../services/index.js';


Messages.importMessagesDirectoryFromMetaUrl(import.meta.url);
const messages = Messages.loadMessages('sf-plugin-gardener', 'lint.run');

export type LintRunResult = {
    files: number;
    findings: {
        rule: string;
        severity: Severity;
        message: string;
        file?: string;
    }[];
};

type LintFailure = Exclude<LintServiceOutput, { success: true }>;

function buildLintService(): LintService {
    const projectLocator = new SfProjectLocator();
    const configurationFinder = new FileConfigurationFinder();

    return new LintService({
        projectLocator,
        configurationFinder,
    });
}

function createError(failure: LintFailure): SfError {
    switch (failure.error) {
        case 'project-not-found':
            return new SfError(
                messages.getMessage('error.projectNotFound', [failure.directory]),
                failure.error,
            );
        case 'package-directory-not-found':
            return new SfError(
                messages.getMessage('error.packageDirectoryNotFound', [failure.directory]),
                failure.error,
            );
        case 'configuration-not-found':
            return new SfError(
                messages.getMessage('error.configurationNotFound', [failure.directory]),
                failure.error,
            );
        case 'preset-not-found':
            return new SfError(
                messages.getMessage('error.presetNotFound', [failure.preset]),
                failure.error,
            );
        case 'invalid-configuration':
            return new SfError(
                messages.getMessage('error.invalidConfiguration', [failure.file]),
                failure.error,
            );
    }
}

export default class Run extends SfCommand<LintRunResult> {
    public static readonly summary = messages.getMessage('summary');
    public static readonly description = messages.getMessage('description');
    public static readonly examples = messages.getMessages('examples');

    public static readonly flags = {
        directory: Flags.directory({
            char: 'd',
            summary: messages.getMessage('flags.directory.summary'),
            default: '.',
            exists: true,
        }),
        strict: Flags.boolean({
            summary: messages.getMessage('flags.strict.summary'),
        }),
    };

    public async run(): Promise<LintRunResult> {
        const { flags } = await this.parse(Run);

        const service = buildLintService();
        const lintServiceOutput = await service.run({
            directory: flags.directory,
        });

        if (!lintServiceOutput.success) {
            throw createError(lintServiceOutput);
        }

        const result = lintServiceOutput.result;
        const errors = result.countErrors();
        const warnings = result.countWarnings();

        this.log(messages.getMessage('summary.counts', [
            String(errors),
            String(warnings),
        ]));

        if (result.hasFailed(flags.strict)) {
            process.exitCode = 1;
        }

        const findings = result.listFindings().map((finding) => {
            const file = finding.getFile();

            return {
                rule: finding.getRule(),
                severity: finding.getSeverity(),
                message: finding.getMessage(),
                ...file ? {
                    file,
                } : {},
            };
        });

        return {
            files: result.countFiles(),
            findings,
        };
    }
}
