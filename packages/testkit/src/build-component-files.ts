import { ComponentFile, ComponentFiles } from '@sf-plugin-gardener/core';
import { FixedComponentFileReader } from './fixed-component-file-reader.js';

type ComponentData = {
    name: string;
    type: string;
    path: string;
    content: unknown;
};

/**
 * Builds component files in memory, each one with the content that a test gives it.
 *
 * @param data The name, the type, the path and the content of each component file.
 */
export function buildComponentFiles(data: ComponentData[]): ComponentFiles {
    const componentFiles = data.map((item) => new ComponentFile({
        name: item.name,
        type: item.type,
        path: item.path,
        child: false,
        reader: new FixedComponentFileReader({
            content: item.content,
            size: 1,
        }),
    }));

    return new ComponentFiles({
        componentFiles,
    });
}
