import type { ComponentFileReader } from '@sf-plugin-gardener/core';

export class FixedComponentFileReader implements ComponentFileReader {
    private readonly content: unknown;
    private readonly size: number;

    /**
     * @param content The content that every read returns.
     * @param size The size in bytes that every read returns.
     */
    public constructor({
        content, size,
    }: {
        content: unknown;
        size: number;
    }) {
        this.content = content;
        this.size = size;
    }

    /** Returns the content that it was given. */
    public readContent(): unknown {
        return this.content;
    }

    /** Returns the size that it was given. */
    public readSize(): number {
        return this.size;
    }
}
