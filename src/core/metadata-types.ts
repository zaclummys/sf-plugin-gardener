import { MetadataType } from './metadata-type.js';

const flow = new MetadataType({
    suffix: '.flow-meta.xml',
});

export const metadataTypes = [flow];
