import type { ComponentFile } from './component-file.js';

export class ComponentFiles {
    private readonly componentFiles: ComponentFile[];

    /** @param componentFiles The components of the package directories that are linted, with the children of each one. */
    public constructor({ componentFiles }: { componentFiles: ComponentFile[] }) {
        this.componentFiles = componentFiles;
    }

    /** Lists the components that are not children of another one. */
    public listRoots(): ComponentFile[] {
        return this.componentFiles.filter((componentFile) => !componentFile.isChild());
    }

    /** Counts the components that are not children of another one. */
    public countRoots(): number {
        return this.listRoots().length;
    }

    /**
     * Lists the components of a metadata type.
     *
     * @param type The metadata type to look for, such as CustomField.
     */
    public listOfType(type: string): ComponentFile[] {
        return this.componentFiles.filter((componentFile) => componentFile.hasType(type));
    }
}
