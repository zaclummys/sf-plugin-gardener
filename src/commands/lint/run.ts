import { Messages, SfError } from '@salesforce/core';
import { Flags, SfCommand } from '@salesforce/sf-plugins-core';
import { ConfigurationFinder, ProjectLocator } from '../../adapters/index.js';
import { LintService, type LintResult } from '../../services/index.js';


Messages.importMessagesDirectoryFromMetaUrl(import.meta.url);
const messages = Messages.loadMessages('sf-plugin-gardener', 'lint.run');

export type LintRunResult = LintResult;

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
        strict: Flags.boolean({ summary: messages.getMessage('flags.strict.summary') }),
    };

    public async run(): Promise<LintRunResult> {
        const { flags } = await this.parse(Run);

        const projectLocator = new ProjectLocator();
        const configurationFinder = new ConfigurationFinder();
        const service = new LintService({
            projectLocator,
            configurationFinder,
        });

        const outcome = await service.run({ directory: flags.directory });

        if (outcome.success) {
            return outcome.result;
        }

        switch (outcome.error) {
            case 'project-not-found':
                throw new SfError(
                    messages.getMessage('error.projectNotFound', [outcome.directory]),
                    outcome.error,
                );
            case 'configuration-not-found':
                throw new SfError(
                    messages.getMessage('error.configurationNotFound', [outcome.project.getDirectory()]),
                    outcome.error,
                );
            case 'multiple-configurations':
                throw new SfError(
                    messages.getMessage('error.multipleConfigurations', [outcome.configurations.map((configuration) => configuration.getFile()).join(', ')]),
                    outcome.error,
                );
            default:
                throw new SfError(messages.getMessage('error.unknown'), 'unknown');
        }
    }
}
