import type { ConfigurationFinder, ProjectLocator } from '../adapters/index.js';
import type { Project } from '../core/index.js';

const configurationFileName = 'sf-plugin-gardener.config.json';

export type LintResult = {
    files: number;
    findings: unknown[];
};

export type LintOutcome =
    | {
        success: true;
        result: LintResult;
    }
    | {
        success: false;
        error: 'project-not-found';
        directory: string;
    }
    | {
        success: false;
        error: 'configuration-not-found';
        project: Project;
    }
    | {
        success: false;
        error: 'invalid-configuration';
        file: string;
    };

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
    public async run({ directory }: { directory: string }): Promise<LintOutcome> {
        const project = await this.projectLocator.locate(directory);

        if (!project) {
            return {
                success: false,
                error: 'project-not-found',
                directory,
            };
        }

        const search = await this.configurationFinder.find({
            project,
            fileName: configurationFileName,
        });

        if (!search.exists) {
            return {
                success: false,
                error: 'configuration-not-found',
                project,
            };
        }

        if (!search.configuration) {
            return {
                success: false,
                error: 'invalid-configuration',
                file: search.file,
            };
        }

        return {
            success: true,
            result: {
                files: 0,
                findings: [],
            },
        };
    }
}
