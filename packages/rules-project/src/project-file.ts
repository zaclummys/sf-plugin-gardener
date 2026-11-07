import type { Component } from '@sf-plugin-gardener/core';
import { z } from 'zod';
import { ApiVersion } from './api-version.js';

export class ProjectFile {
    private readonly component: Component;

    /** @param component The component that holds the file, which is read only when a rule asks for it. */
    public constructor({ component }: { component: Component }) {
        this.component = component;
    }

    /** Returns the path of the file, relative to the project. */
    public getPath(): string {
        return this.component.getPath();
    }

    /** Measures the size of the file, in bytes. */
    public getSize(): number {
        return this.component.getSize();
    }

    /** Reads the apiVersion that the file declares, or null when it declares none. */
    public getApiVersion(): ApiVersion | null {
        const type = this.component.getType();
        const schema = z.object({
            [type]: z.object({
                apiVersion: z.string().nullish(),
            }),
        });
        const file = schema.parse(this.component.getContent());

        return ApiVersion.from(file[type].apiVersion ?? null);
    }

    /**
     * Tells whether the file declares an apiVersion below a version.
     *
     * @param version The version to compare with.
     */
    public hasApiVersionBelow(version: ApiVersion): boolean {
        return this.getApiVersion()?.isBelow(version) === true;
    }

    /**
     * Tells whether the file declares an apiVersion above a version.
     *
     * @param version The version to compare with.
     */
    public hasApiVersionAbove(version: ApiVersion): boolean {
        return this.getApiVersion()?.isAbove(version) === true;
    }
}
