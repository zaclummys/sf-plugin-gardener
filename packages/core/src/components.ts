import type { Component } from './component.js';

export class Components {
    private readonly components: Component[];

    /** @param components The components of the package directories that are linted, with the children of each one. */
    public constructor({ components }: { components: Component[] }) {
        this.components = components;
    }

    /** Lists the components that are not children of another one. */
    public listRoots(): Component[] {
        return this.components.filter((component) => !component.isChild());
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
    public listOfType(type: string): Component[] {
        return this.components.filter((component) => component.hasType(type));
    }
}
