import { existsSync } from 'node:fs';
import { stat } from 'node:fs/promises';
import path from 'node:path';
import { SfProject } from '@salesforce/core';
import { MetadataResolver, type SourceComponent } from '@salesforce/source-deploy-retrieve';
import { getString } from '@salesforce/ts-types';
import { ApiVersion, CustomField, CustomFields, CustomObject, CustomObjects, DeploymentStatus, Project, ProjectFile, SharingModel } from '../core/index.js';
import type { ProjectLocateOutput, ProjectLocator } from '../services/adapters/index.js';

async function resolveSfProject(directory: string): Promise<SfProject | null> {
    try {
        return await SfProject.resolve(directory);
    } catch {
        return null;
    }
}

type XmlComponent = SourceComponent & { xml: string };

function hasXml(component: SourceComponent): component is XmlComponent {
    return component.xml != null;
}

async function buildProjectFile({
    component, projectDirectory,
}: {
    component: XmlComponent;
    projectDirectory: string;
}): Promise<ProjectFile> {
    const paths = [
        component.xml,
        ...component.walkContent(),
    ];
    const stats = await Promise.all(paths.map((file) => stat(file)));
    const size = stats.reduce((total, fileStat) => total + fileStat.size, 0);
    const xml = component.parseXmlSync();
    const apiVersionText = getString(xml, `${component.type.name}.apiVersion`);
    const apiVersion = apiVersionText ? ApiVersion.fromString(apiVersionText) : null;

    return new ProjectFile({
        path: path.relative(projectDirectory, component.xml),
        size,
        apiVersion,
    });
}

function isCustomObject(component: SourceComponent): boolean {
    return component.type.name === 'CustomObject';
}

function isCustomField(component: SourceComponent): boolean {
    return component.type.name === 'CustomField';
}

function buildCustomField({
    component, projectDirectory,
}: {
    component: XmlComponent;
    projectDirectory: string;
}): CustomField {
    const xml = component.parseXmlSync();
    const description = getString(xml, 'CustomField.description');

    return new CustomField({
        name: component.fullName,
        path: path.relative(projectDirectory, component.xml),
        described: Boolean(description),
    });
}

function buildCustomObject({
    component, projectDirectory,
}: {
    component: XmlComponent;
    projectDirectory: string;
}): CustomObject {
    const xml = component.parseXmlSync();
    const deploymentStatusText = getString(xml, 'CustomObject.deploymentStatus');
    const deploymentStatus = deploymentStatusText ? new DeploymentStatus(deploymentStatusText) : null;
    const sharingModelText = getString(xml, 'CustomObject.sharingModel');
    const sharingModel = sharingModelText ? new SharingModel(sharingModelText) : null;

    return new CustomObject({
        name: component.fullName,
        path: path.relative(projectDirectory, component.xml),
        deploymentStatus,
        sharingModel,
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
        const files = await Promise.all(components.map((component) => buildProjectFile({
            component,
            projectDirectory,
        })));
        const objects = components.filter(isCustomObject).map((component) => buildCustomObject({
            component,
            projectDirectory,
        }));
        const children = components.flatMap((component) => component.getChildren());
        const fields = children.filter(hasXml).filter(isCustomField).map((component) => buildCustomField({
            component,
            projectDirectory,
        }));

        const customObjects = new CustomObjects({
            objects,
        });
        const customFields = new CustomFields({
            fields,
        });
        const project = new Project({
            directory: projectDirectory,
            files,
            customObjects,
            customFields,
        });

        return {
            success: true,
            project,
        };
    }
}
