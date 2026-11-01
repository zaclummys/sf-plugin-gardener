import { Messages, SfError, SfProject } from '@salesforce/core';
import { Flags, SfCommand } from '@salesforce/sf-plugins-core';


Messages.importMessagesDirectoryFromMetaUrl(import.meta.url);
const messages = Messages.loadMessages('sf-plugin-gardener', 'lint.run');

export type LintRunResult = {
    files: number;
    findings: unknown[];
};

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

        try {
            await SfProject.resolveProjectPath(flags.directory);
        } catch {
            throw new SfError(messages.getMessage('error.projectNotFound', [flags.directory]), 'ProjectNotFoundError');
        }

        return {
            files: 0,
            findings: [],
        };
    }
}
