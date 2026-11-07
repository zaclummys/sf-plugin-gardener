import { Rule, type Finding, type Project } from '@sf-plugin-gardener/core';
import { ProjectFiles } from './project-files.js';

export abstract class ProjectFileRule extends Rule {
    public check({ project }: { project: Project }): Finding[] {
        const projectFiles = ProjectFiles.from({
            project,
        });

        return this.checkFiles({
            projectFiles,
        });
    }

    /**
     * Checks the metadata files and reports what the rule finds.
     *
     * @param projectFiles The metadata files to check.
     */
    public abstract checkFiles({ projectFiles }: { projectFiles: ProjectFiles }): Finding[];
}
