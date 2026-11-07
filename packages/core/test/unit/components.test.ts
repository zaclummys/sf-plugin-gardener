import { expect } from 'chai';
import { Component, Components } from '../../lib/index.js';

function buildComponent({
    name, type, child,
}: {
    name: string;
    type: string;
    child: boolean;
}): Component {
    return new Component({
        name,
        type,
        path: `${name}.xml`,
        size: 1,
        child,
        content: {},
    });
}

const object = buildComponent({
    name: 'Sample__c',
    type: 'CustomObject',
    child: false,
});

const field = buildComponent({
    name: 'Sample__c.Code__c',
    type: 'CustomField',
    child: true,
});

const components = new Components({
    components: [
        object,
        field,
    ],
});

describe('Components', () => {
    it('lists the components that are not children', () => {
        expect(components.listRoots()).to.deep.equal([object]);
    });

    it('counts the components that are not children', () => {
        expect(components.countRoots()).to.equal(1);
    });

    it('lists the components of a type', () => {
        expect(components.listOfType('CustomField')).to.deep.equal([field]);
    });
});
