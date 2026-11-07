import { Rule, type Components } from '@sf-plugin-gardener/core';
import { ProjectFiles } from './project-files.js';

export abstract class ProjectFileRule extends Rule<ProjectFiles> {
    protected read(components: Components): ProjectFiles {
        return ProjectFiles.from({
            components,
        });
    }
}
