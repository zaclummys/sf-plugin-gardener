import { expect } from 'chai';
import { ComponentFile, type ComponentFileReader } from '../../lib/index.js';

class CountingReader implements ComponentFileReader {
    public reads = 0;
    public measures = 0;

    public readContent(): Record<string, unknown> {
        this.reads += 1;

        return {
            CustomField: {},
        };
    }

    public readSize(): number {
        this.measures += 1;

        return 42;
    }
}

function buildComponentFile(reader: ComponentFileReader): ComponentFile {
    return new ComponentFile({
        name: 'Sample__c.Code__c',
        type: 'CustomField',
        path: 'force-app/Code__c.field-meta.xml',
        child: true,
        reader,
    });
}

describe('ComponentFile', () => {
    it('returns its name', () => {
        expect(buildComponentFile(new CountingReader()).getName()).to.equal('Sample__c.Code__c');
    });

    it('returns its path', () => {
        expect(buildComponentFile(new CountingReader()).getPath()).to.equal('force-app/Code__c.field-meta.xml');
    });

    it('returns its type', () => {
        expect(buildComponentFile(new CountingReader()).getType()).to.equal('CustomField');
    });

    it('tells that it is a child', () => {
        expect(buildComponentFile(new CountingReader()).isChild()).to.equal(true);
    });

    it('has the type that it declares', () => {
        expect(buildComponentFile(new CountingReader()).hasType('CustomField')).to.equal(true);
    });

    it('does not have another type', () => {
        expect(buildComponentFile(new CountingReader()).hasType('CustomObject')).to.equal(false);
    });

    it('does not read its content when it is built', () => {
        const reader = new CountingReader();

        buildComponentFile(reader);

        expect(reader.reads).to.equal(0);
    });

    it('does not measure its size when it is built', () => {
        const reader = new CountingReader();

        buildComponentFile(reader);

        expect(reader.measures).to.equal(0);
    });

    it('reads its content when asked', () => {
        const componentFile = buildComponentFile(new CountingReader());

        expect(componentFile.readContent()).to.deep.equal({
            CustomField: {},
        });
    });

    it('measures its size when asked', () => {
        const componentFile = buildComponentFile(new CountingReader());

        expect(componentFile.readSize()).to.equal(42);
    });
});
