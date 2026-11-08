import type { ComponentFileReader } from '@sf-plugin-gardener/core';

export class FixedComponentFileReader implements ComponentFileReader {
    private readonly content: unknown;

    /** @param content The content that every read returns. */
    public constructor({ content }: { content: unknown }) {
        this.content = content;
    }

    /** Returns the content that it was given. */
    public readContent(): unknown {
        return this.content;
    }

    /** Returns a size of one byte. */
    public readSize(): number {
        return 1;
    }
}
