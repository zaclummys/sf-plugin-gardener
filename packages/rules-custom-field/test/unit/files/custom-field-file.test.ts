import { expect } from 'chai';
import { ComponentFile, type ComponentFileReader } from '@sf-plugin-gardener/core';
import { CustomFieldFile } from '../../../lib/files/custom-field-file.js';

class CountingReader implements ComponentFileReader {
    public reads = 0;

    public readContent(): unknown {
        this.reads += 1;

        return {
            description: 'The code of the sample.',
            type: 'Text',
        };
    }

    public readSize(): number {
        return 1;
    }
}

function buildFile(reader: ComponentFileReader): CustomFieldFile {
    const componentFile = new ComponentFile({
        name: 'Sample__c.Code__c',
        type: 'CustomField',
        path: 'force-app/Code__c.field-meta.xml',
        child: true,
        reader,
    });

    return new CustomFieldFile({
        componentFile,
    });
}

describe('CustomFieldFile', () => {
    it('returns the path of its file', () => {
        expect(buildFile(new CountingReader()).getPath()).to.equal('force-app/Code__c.field-meta.xml');
    });

    it('does not read its content when it is built', () => {
        const reader = new CountingReader();

        buildFile(reader);

        expect(reader.reads).to.equal(0);
    });

    it('reads the name of the field from its component', () => {
        const field = buildFile(new CountingReader()).getCustomField();

        expect(field.getName()).to.equal('Sample__c.Code__c');
    });

    it('reads the data of the field from its content', () => {
        const field = buildFile(new CountingReader()).getCustomField();

        expect(field.isUndescribed()).to.equal(false);
    });

    it('reads its content when the field is asked for', () => {
        const reader = new CountingReader();

        buildFile(reader).getCustomField();

        expect(reader.reads).to.equal(1);
    });
});
