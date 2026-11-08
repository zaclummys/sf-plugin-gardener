import { expect } from 'chai';
import { ComponentFile, type ComponentFileReader } from '@sf-plugin-gardener/core';
import { CustomObjectFile } from '../../lib/custom-object-file.js';

class CountingReader implements ComponentFileReader {
    public reads = 0;

    public readContent(): unknown {
        this.reads += 1;

        return {
            CustomObject: {
                deploymentStatus: 'InDevelopment',
                sharingModel: 'ReadWrite',
            },
        };
    }

    public measureSize(): number {
        return 1;
    }
}

function buildFile(reader: ComponentFileReader): CustomObjectFile {
    const componentFile = new ComponentFile({
        name: 'Sample__c',
        type: 'CustomObject',
        path: 'force-app/Sample__c.object-meta.xml',
        child: false,
        reader,
    });

    return new CustomObjectFile({
        componentFile,
    });
}

describe('CustomObjectFile', () => {
    it('returns the path of its file', () => {
        expect(buildFile(new CountingReader()).getPath()).to.equal('force-app/Sample__c.object-meta.xml');
    });

    it('does not read its content when it is built', () => {
        const reader = new CountingReader();

        buildFile(reader);

        expect(reader.reads).to.equal(0);
    });

    it('reads the name of the object from its component', () => {
        const object = buildFile(new CountingReader()).getCustomObject();

        expect(object.getName()).to.equal('Sample__c');
    });

    it('reads the data of the object from its content', () => {
        const object = buildFile(new CountingReader()).getCustomObject();

        expect(object.isInDevelopment()).to.equal(true);
    });

    it('reads its content when the object is asked for', () => {
        const reader = new CountingReader();

        buildFile(reader).getCustomObject();

        expect(reader.reads).to.equal(1);
    });
});
