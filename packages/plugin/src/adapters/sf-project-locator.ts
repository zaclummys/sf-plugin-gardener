import { existsSync } from 'node:fs';
import path from 'node:path';
import { SfProject } from '@salesforce/core';
import { MetadataResolver, type SourceComponent } from '@salesforce/source-deploy-retrieve';
import { ComponentFile, ComponentFiles } from '@sf-plugin-gardener/core';
import { Project } from '../services/index.js';
import type { ProjectLocateOutput, ProjectLocator } from '../services/adapters/index.js';
import { SourceComponentFileReader, type XmlComponent } from './source-component-file-reader.js';

async function resolveSfProject(directory: string): Promise<SfProject | null> {
    try {
        return await SfProject.resolve(directory);
    } catch {
        return null;
    }
}

function hasXml(component: SourceComponent): component is XmlComponent {
    return component.xml != null;
}

function buildComponentFile({
    component, projectDirectory, child,
}: {
    component: XmlComponent;
    projectDirectory: string;
    child: boolean;
}): ComponentFile {
    const reader = new SourceComponentFileReader({
        component,
    });

    return new ComponentFile({
        name: component.fullName,
        type: component.type.name,
        path: path.relative(projectDirectory, component.xml),
        child,
        reader,
    });
}

function buildComponentFiles({
    components, projectDirectory,
}: {
    components: XmlComponent[];
    projectDirectory: string;
}): ComponentFiles {
    const children = components.flatMap((component) => component.getChildren()).filter(hasXml);
    const roots = components.map((component) => buildComponentFile({
        component,
        projectDirectory,
        child: false,
    }));
    const nested = children.map((component) => buildComponentFile({
        component,
        projectDirectory,
        child: true,
    }));

    return new ComponentFiles({
        componentFiles: [
            ...roots,
            ...nested,
        ],
    });
}

export class SfProjectLocator implements ProjectLocator {
    /**
     * Finds the project that holds the directory, with the files of its package directories.
     *
     * @param directory The directory to start from. The search goes up from it.
     * @returns The project, or the reason it could not be found or read.
     */
    public async locate(directory: string): Promise<ProjectLocateOutput> {
        const sfProject = await resolveSfProject(directory);

        if (!sfProject) {
            return {
                success: false,
                error: 'project-not-found',
                directory,
            };
        }

        const projectDirectory = sfProject.getPath();
        const projectJson = sfProject
            .getSfProjectJson()
            .getContents();

        const fullPaths = projectJson.packageDirectories.map((packageDirectory) => path.resolve(projectDirectory, packageDirectory.path));
        const missingPath = fullPaths.find((fullPath) => !existsSync(fullPath));

        if (missingPath) {
            return {
                success: false,
                error: 'package-directory-not-found',
                directory: missingPath,
            };
        }

        const resolver = new MetadataResolver();
        const components = fullPaths.flatMap((fullPath) => resolver.getComponentsFromPath(fullPath).filter(hasXml));
        const componentFiles = buildComponentFiles({
            components,
            projectDirectory,
        });
        const project = new Project({
            directory: projectDirectory,
            componentFiles,
        });

        return {
            success: true,
            project,
        };
    }
}
