import type { ConfigurationFinder, ConfigurationFindResult, ProjectLocateResult, ProjectLocator } from './adapters/index.js';

const configurationFileName = 'sf-plugin-gardener.config.json';

export type LintResult = {
    files: number;
    findings: unknown[];
};

export type LintServiceResult =
    | {
        success: true;
        result: LintResult;
    }
    | Exclude<ProjectLocateResult, { success: true }>
    | Exclude<ConfigurationFindResult, { success: true }>;

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
    public async run({ directory }: { directory: string }): Promise<LintServiceResult> {
        const location = await this.projectLocator.locate(directory);

        if (!location.success) {
            return location;
        }

        const project = location.project;

        const search = await this.configurationFinder.find({
            project,
            fileName: configurationFileName,
        });

        if (!search.success) {
            return search;
        }

        return {
            success: true,
            result: {
                files: project.countFiles(),
                findings: [],
            },
        };
    }
}
