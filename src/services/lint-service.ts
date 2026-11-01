import type { ConfigurationFinder, ProjectLocator } from '../adapters/index.js';
import type { Configuration, Project } from '../core/index.js';

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
        error: 'multiple-configurations';
        configurations: Configuration[];
    };

export class LintService {
    private readonly projectLocator: ProjectLocator;
    private readonly configurationFinder: ConfigurationFinder;

    /**
     * @param projectLocator Finds the project of a directory.
     * @param configurationFinder Finds the configurations of a project.
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

        const configurations = this.configurationFinder.find(project);

        if (configurations.length === 0) {
            return {
                success: false,
                error: 'configuration-not-found',
                project,
            };
        }

        if (configurations.length > 1) {
            return {
                success: false,
                error: 'multiple-configurations',
                configurations,
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
