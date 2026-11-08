import { ComponentFile } from '@sf-plugin-gardener/core';
import { FixedComponentFileReader } from '@sf-plugin-gardener/testkit';
import { CustomFieldFile } from '../../../lib/files/index.js';
import { CustomFieldFiles } from '../../../lib/files/index.js';

type FieldFileData = {
    name: string;
    path: string;
    content: unknown;
};

/**
 * Builds custom field files in memory, each one with the content that a test gives it.
 *
 * @param data The name, the path and the content of each field file.
 */
export function buildFieldFiles(data: FieldFileData[]): CustomFieldFiles {
    const files = data.map((item) => {
        const componentFile = new ComponentFile({
            name: item.name,
            type: 'CustomField',
            path: item.path,
            child: true,
            reader: new FixedComponentFileReader({
                content: item.content,
                size: 1,
            }),
        });

        return new CustomFieldFile({
            componentFile,
        });
    });

    return new CustomFieldFiles({
        files,
    });
}
