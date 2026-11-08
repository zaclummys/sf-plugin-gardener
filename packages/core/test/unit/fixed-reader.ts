import type { ComponentFileReader } from '../../lib/index.js';

export class FixedReader implements ComponentFileReader {
    public readContent(): unknown {
        return {};
    }

    public readSize(): number {
        return 1;
    }
}
