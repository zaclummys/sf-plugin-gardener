import { expect } from 'chai';
import { Component, type ComponentReader } from '../../lib/index.js';

class CountingReader implements ComponentReader {
    public reads = 0;
    public measures = 0;

    public readContent(): Record<string, unknown> {
        this.reads += 1;

        return {
            CustomField: {},
        };
    }

    public measureSize(): number {
        this.measures += 1;

        return 42;
    }
}

function buildComponent(reader: ComponentReader): Component {
    return new Component({
        name: 'Sample__c.Code__c',
        type: 'CustomField',
        path: 'force-app/Code__c.field-meta.xml',
        child: true,
        reader,
    });
}

describe('Component', () => {
    it('returns its name', () => {
        expect(buildComponent(new CountingReader()).getName()).to.equal('Sample__c.Code__c');
    });

    it('returns its path', () => {
        expect(buildComponent(new CountingReader()).getPath()).to.equal('force-app/Code__c.field-meta.xml');
    });

    it('returns its type', () => {
        expect(buildComponent(new CountingReader()).getType()).to.equal('CustomField');
    });

    it('tells that it is a child', () => {
        expect(buildComponent(new CountingReader()).isChild()).to.equal(true);
    });

    it('has the type that it declares', () => {
        expect(buildComponent(new CountingReader()).hasType('CustomField')).to.equal(true);
    });

    it('does not have another type', () => {
        expect(buildComponent(new CountingReader()).hasType('CustomObject')).to.equal(false);
    });

    it('does not read its content when it is built', () => {
        const reader = new CountingReader();

        buildComponent(reader);

        expect(reader.reads).to.equal(0);
    });

    it('does not measure its size when it is built', () => {
        const reader = new CountingReader();

        buildComponent(reader);

        expect(reader.measures).to.equal(0);
    });

    it('reads its content when asked', () => {
        const component = buildComponent(new CountingReader());

        expect(component.getContent()).to.deep.equal({
            CustomField: {},
        });
    });

    it('measures its size when asked', () => {
        const component = buildComponent(new CountingReader());

        expect(component.getSize()).to.equal(42);
    });
});
