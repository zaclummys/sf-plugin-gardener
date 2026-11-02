import type { Configuration, Project } from '../../core/index.js';

export type ConfigurationFindResult =
    | {
        success: true;
        configuration: Configuration;
    }
    | {
        success: false;
        error: 'configuration-not-found';
        directory: string;
    }
    | {
        success: false;
        error: 'invalid-configuration';
        file: string;
    }
    | {
        success: false;
        error: 'preset-not-found';
        preset: string;
    };

export type ConfigurationFinder = {
    /**
     * Finds the configuration of a project.
     *
     * @param project The project to look in.
     * @param fileName The name of the configuration file.
     * @returns The configuration, or the reason it could not be found or read.
     */
    find(options: {
        project: Project;
        fileName: string;
    }): Promise<ConfigurationFindResult>;
};
