import { ComponentFile } from '@sf-plugin-gardener/core';
import { FixedComponentFileReader } from '@sf-plugin-gardener/testkit';
import { CustomObjectFile } from '../../lib/custom-object-file.js';
import { CustomObjectFiles } from '../../lib/custom-object-files.js';

type ObjectFileData = {
    name: string;
    path: string;
    content: unknown;
};

/**
 * Builds custom object files in memory, each one with the content that a test gives it.
 *
 * @param data The name, the path and the content of each object file.
 */
export function buildObjectFiles(data: ObjectFileData[]): CustomObjectFiles {
    const files = data.map((item) => {
        const componentFile = new ComponentFile({
            name: item.name,
            type: 'CustomObject',
            path: item.path,
            child: false,
            reader: new FixedComponentFileReader({
                content: item.content,
            }),
        });

        return new CustomObjectFile({
            componentFile,
        });
    });

    return new CustomObjectFiles({
        files,
    });
}
