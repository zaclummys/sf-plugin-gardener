import { expect } from 'chai';
import { Component } from '../../lib/index.js';

function buildComponent(): Component {
    return new Component({
        name: 'Sample__c.Code__c',
        type: 'CustomField',
        path: 'force-app/Code__c.field-meta.xml',
        size: 42,
        child: true,
        content: {
            CustomField: {},
        },
    });
}

describe('Component', () => {
    it('returns its name', () => {
        expect(buildComponent().getName()).to.equal('Sample__c.Code__c');
    });

    it('returns its path', () => {
        expect(buildComponent().getPath()).to.equal('force-app/Code__c.field-meta.xml');
    });

    it('returns its type', () => {
        expect(buildComponent().getType()).to.equal('CustomField');
    });

    it('returns its size', () => {
        expect(buildComponent().getSize()).to.equal(42);
    });

    it('returns its content', () => {
        expect(buildComponent().getContent()).to.deep.equal({
            CustomField: {},
        });
    });

    it('tells that it is a child', () => {
        expect(buildComponent().isChild()).to.equal(true);
    });

    it('has the type that it declares', () => {
        expect(buildComponent().hasType('CustomField')).to.equal(true);
    });

    it('does not have another type', () => {
        expect(buildComponent().hasType('CustomObject')).to.equal(false);
    });
});
