import { Rule, type ComponentFiles } from '@sf-plugin-gardener/core';
import { ProjectFiles } from '../files/project-files.js';

export abstract class ProjectFileRule extends Rule<ProjectFiles> {
    protected read(componentFiles: ComponentFiles): ProjectFiles {
        return ProjectFiles.from({
            componentFiles,
        });
    }
}
