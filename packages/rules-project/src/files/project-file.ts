import type { ComponentFile } from '@sf-plugin-gardener/core';
import { z } from 'zod';
import { ApiVersion } from '../metadata/index.js';

const fileContent = z.object({
    apiVersion: z.string().nullish(),
});

export class ProjectFile {
    private readonly componentFile: ComponentFile;

    /** @param componentFile The component that holds the file, which is read only when a rule asks for it. */
    public constructor({ componentFile }: { componentFile: ComponentFile }) {
        this.componentFile = componentFile;
    }

    /** Returns the path of the file, relative to the project. */
    public getPath(): string {
        return this.componentFile.getPath();
    }

    /** Reads the size of the file, in bytes. */
    public getSize(): number {
        return this.componentFile.readSize();
    }

    /** Reads the apiVersion that the file declares, or null when it declares none. */
    public getApiVersion(): ApiVersion | null {
        const content = fileContent.parse(this.componentFile.readContent());

        return ApiVersion.from(content.apiVersion ?? null);
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
