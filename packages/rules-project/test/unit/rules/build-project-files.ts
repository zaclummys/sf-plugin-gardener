import { ComponentFile, ComponentFiles } from '@sf-plugin-gardener/core';
import { FixedComponentFileReader } from '@sf-plugin-gardener/testkit';
import { ProjectFiles } from '../../../lib/files/index.js';

type FileData = {
    path: string;
    size: number;
    content: unknown;
    child: boolean;
};

/**
 * Builds project files in memory, each one with the size and the content that a test gives it.
 *
 * @param data The path, the size, the content and whether it is a child, of each file.
 */
export function buildProjectFiles(data: FileData[]): ProjectFiles {
    const componentFiles = data.map((item) => new ComponentFile({
        name: item.path,
        type: 'Flow',
        path: item.path,
        child: item.child,
        reader: new FixedComponentFileReader({
            content: item.content,
            size: item.size,
        }),
    }));

    return ProjectFiles.from({
        componentFiles: new ComponentFiles({
            componentFiles,
        }),
    });
}

/**
 * Describes a file of a given size.
 *
 * @param path The path of the file.
 * @param size The size of the file, in bytes.
 */
export function describeFile({
    path, size,
}: {
    path: string;
    size: number;
}): FileData {
    return {
        path,
        size,
        content: {},
        child: false,
    };
}

/**
 * Describes a file that declares an apiVersion.
 *
 * @param path The path of the file.
 * @param apiVersion The apiVersion that the file declares.
 */
export function describeVersionedFile({
    path, apiVersion,
}: {
    path: string;
    apiVersion: string;
}): FileData {
    return {
        path,
        size: 1,
        content: {
            apiVersion,
        },
        child: false,
    };
}
