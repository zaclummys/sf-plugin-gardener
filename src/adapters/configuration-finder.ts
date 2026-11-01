import { existsSync } from 'node:fs';
import path from 'node:path';
import { Configuration, type Project } from '../core/index.js';

export class ConfigurationFinder {
    /**
     * Finds the configurations of a project.
     *
     * @param project The project to look in.
     * @returns The configurations whose file exists.
     */
    public find(project: Project): Configuration[] {
        const directory = project.getDirectory();

        return project.listConfigurationFileNames()
            .map((name) => path.join(directory, name))
            .filter((file) => existsSync(file))
            .map((file) => new Configuration(file));
    }
}
