import { statSync } from 'node:fs';
import type { SourceComponent } from '@salesforce/source-deploy-retrieve';
import type { ComponentFileReader } from '@sf-plugin-gardener/core';

export type XmlComponent = SourceComponent & { xml: string };

export class SourceComponentFileReader implements ComponentFileReader {
    private readonly component: XmlComponent;

    /** @param component The component of the Salesforce CLI that holds the files. */
    public constructor({ component }: { component: XmlComponent }) {
        this.component = component;
    }

    /** Reads and parses the XML file of the component, and returns what its root element holds. */
    public readContent(): unknown {
        const xml = this.component.parseXmlSync();

        return xml[this.component.type.name];
    }

    /** Sums the size of the XML file and of the content files of the component, in bytes. */
    public readSize(): number {
        const paths = [
            this.component.xml,
            ...this.component.walkContent(),
        ];

        return paths.reduce((total, file) => total + statSync(file).size, 0);
    }
}
