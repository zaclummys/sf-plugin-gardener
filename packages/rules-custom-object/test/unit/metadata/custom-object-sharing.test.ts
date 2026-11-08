import { expect } from 'chai';
import { SharingModel } from '../../../lib/metadata/sharing-model.js';
import { SharingModels } from '../../../lib/metadata/sharing-models.js';
import { buildObject } from './build-object.ts';

const forbidden = new SharingModels({
    models: [new SharingModel('ReadWrite')],
});

describe('CustomObject sharing model', () => {
    it('returns the sharingModel that it declares', () => {
        const model = buildObject({
            sharingModel: 'Private',
        }).getSharingModel();

        expect(model?.toString()).to.equal('Private');
    });

    it('returns no sharingModel when it declares none', () => {
        expect(buildObject({}).getSharingModel()).to.equal(null);
    });

    it('has a sharingModel among the models when it is one of them', () => {
        expect(buildObject({
            sharingModel: 'ReadWrite',
        }).hasSharingModelIn(forbidden)).to.equal(true);
    });

    it('has no sharingModel among the models when it is none of them', () => {
        expect(buildObject({
            sharingModel: 'Private',
        }).hasSharingModelIn(forbidden)).to.equal(false);
    });

    it('has no sharingModel among the models when it declares none', () => {
        expect(buildObject({}).hasSharingModelIn(forbidden)).to.equal(false);
    });
});
