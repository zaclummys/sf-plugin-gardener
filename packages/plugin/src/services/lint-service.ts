import { LintResult } from './lint-result.js';
import type { ConfigurationFinder, ConfigurationFindOutput, ProjectLocateOutput, ProjectLocator } from './adapters/index.js';

const configurationFileName = 'sf-plugin-gardener.config.json';

export type LintServiceOutput =
    | {
        success: true;
        result: LintResult;
    }
    | Exclude<ProjectLocateOutput, { success: true }>
    | Exclude<ConfigurationFindOutput, { success: true }>;

export class LintService {
    private readonly projectLocator: ProjectLocator;
    private readonly configurationFinder: ConfigurationFinder;

    /**
     * @param projectLocator Finds the project of a directory.
     * @param configurationFinder Finds the configuration of a project.
     */
    public constructor({
        projectLocator, configurationFinder,
    }: {
        projectLocator: ProjectLocator;
        configurationFinder: ConfigurationFinder;
    }) {
        this.projectLocator = projectLocator;
        this.configurationFinder = configurationFinder;
    }

    /**
     * Lints the project that holds the directory.
     *
     * @param directory The directory to start from.
     */
    public async run({ directory }: { directory: string }): Promise<LintServiceOutput> {
        const projectLocateOutput = await this.projectLocator.locate(directory);

        if (!projectLocateOutput.success) {
            return projectLocateOutput;
        }

        const project = projectLocateOutput.project;

        const configurationFindOutput = await this.configurationFinder.find({
            project,
            fileName: configurationFileName,
        });

        if (!configurationFindOutput.success) {
            return configurationFindOutput;
        }

        const configuration = configurationFindOutput.configuration;
        const components = project.getComponents();
        const findings = configuration.check(components);

        return {
            success: true,
            result: new LintResult({
                files: components.countRoots(),
                findings,
            }),
        };
    }
}
