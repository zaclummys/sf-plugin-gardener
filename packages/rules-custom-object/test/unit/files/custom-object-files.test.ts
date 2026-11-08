import { expect } from 'chai';
import { buildComponentFiles } from '@sf-plugin-gardener/testkit';
import { CustomObjectFiles } from '../../../lib/files/index.js';

const componentFiles = buildComponentFiles([
    {
        name: 'Sample__c.Code__c',
        type: 'CustomField',
        path: 'force-app/Code__c.field-meta.xml',
        content: {
            description: 'Not an object.',
        },
    },
    {
        name: 'Sample__c',
        type: 'CustomObject',
        path: 'force-app/Sample__c.object-meta.xml',
        content: {
            deploymentStatus: 'InDevelopment',
        },
    },
]);

describe('CustomObjectFiles', () => {
    it('builds the files from the components of the CustomObject type only', () => {
        const files = CustomObjectFiles.from({
            componentFiles,
        });

        expect(files.listInDevelopment().map((file) => file.getPath())).to.deep.equal(['force-app/Sample__c.object-meta.xml']);
    });
});
