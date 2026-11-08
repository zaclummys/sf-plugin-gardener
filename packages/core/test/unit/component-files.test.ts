import { expect } from 'chai';
import { ComponentFile, ComponentFiles } from '../../lib/index.js';

function buildComponentFile({
    name, type, child,
}: {
    name: string;
    type: string;
    child: boolean;
}): ComponentFile {
    return new ComponentFile({
        name,
        type,
        path: `${name}.xml`,
        child,
        reader: {
            readContent: () => ({}),
            readSize: () => 1,
        },
    });
}

const object = buildComponentFile({
    name: 'Sample__c',
    type: 'CustomObject',
    child: false,
});

const field = buildComponentFile({
    name: 'Sample__c.Code__c',
    type: 'CustomField',
    child: true,
});

const componentFiles = new ComponentFiles({
    componentFiles: [
        object,
        field,
    ],
});

describe('ComponentFiles', () => {
    it('lists the componentFiles that are not children', () => {
        expect(componentFiles.listRoots()).to.deep.equal([object]);
    });

    it('counts the componentFiles that are not children', () => {
        expect(componentFiles.countRoots()).to.equal(1);
    });

    it('lists the componentFiles of a type', () => {
        expect(componentFiles.listOfType('CustomField')).to.deep.equal([field]);
    });
});
