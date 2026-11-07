import type { Component } from '@sf-plugin-gardener/core';
import { ApiVersion } from './api-version.js';

export class ProjectFile {
    private readonly path: string;
    private readonly size: number;
    private readonly apiVersion: ApiVersion | null;

    /**
     * @param path The path of the file, relative to the project.
     * @param size The size of the file, in bytes.
     * @param apiVersion The apiVersion that the file declares, if any.
     */
    public constructor({
        path, size, apiVersion,
    }: {
        path: string;
        size: number;
        apiVersion: string | null;
    }) {
        this.path = path;
        this.size = size;
        this.apiVersion = ApiVersion.from(apiVersion);
    }

    /**
     * Builds a file from a component that is not a child of another one.
     *
     * @param component The component that holds the file.
     */
    public static from({ component }: { component: Component }): ProjectFile {
        const content = component.getContent();
        const root = content[component.getType()] as { apiVersion?: string };

        return new ProjectFile({
            path: component.getPath(),
            size: component.getSize(),
            apiVersion: root.apiVersion ?? null,
        });
    }

    /** Returns the path of the file, relative to the project. */
    public getPath(): string {
        return this.path;
    }

    /** Returns the size of the file, in bytes. */
    public getSize(): number {
        return this.size;
    }

    /** Returns the apiVersion that the file declares, or null when it declares none. */
    public getApiVersion(): ApiVersion | null {
        return this.apiVersion;
    }

    /**
     * Tells whether the file declares an apiVersion below a version.
     *
     * @param version The version to compare with.
     */
    public hasApiVersionBelow(version: ApiVersion): boolean {
        return this.apiVersion?.isBelow(version) === true;
    }

    /**
     * Tells whether the file declares an apiVersion above a version.
     *
     * @param version The version to compare with.
     */
    public hasApiVersionAbove(version: ApiVersion): boolean {
        return this.apiVersion?.isAbove(version) === true;
    }
}
