import { expect } from 'chai';
import { CustomFieldFiles } from '../../../lib/files/index.js';
import { buildComponentFiles } from '@sf-plugin-gardener/testkit';

const componentFiles = buildComponentFiles([
    {
        name: 'Sample__c',
        type: 'CustomObject',
        path: 'force-app/Sample__c.object-meta.xml',
        content: {},
    },
    {
        name: 'Sample__c.Code__c',
        type: 'CustomField',
        path: 'force-app/Code__c.field-meta.xml',
        content: {},
    },
]);

describe('CustomFieldFiles', () => {
    it('builds the files from the components of the CustomField type only', () => {
        const files = CustomFieldFiles.from({
            componentFiles,
        });

        expect(files.listUndescribed().map((file) => file.getPath())).to.deep.equal(['force-app/Code__c.field-meta.xml']);
    });
});
