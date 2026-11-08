import { expect } from 'chai';
import { buildField } from './build-field.ts';

describe('CustomField picklist', () => {
    it('is an unrestricted picklist when it is a picklist with no restricted', () => {
        expect(buildField({
            type: 'Picklist',
        }).isUnrestrictedPicklist()).to.equal(true);
    });

    it('is an unrestricted picklist when it is a multiselect picklist with no restricted', () => {
        expect(buildField({
            type: 'MultiselectPicklist',
        }).isUnrestrictedPicklist()).to.equal(true);
    });

    it('is an unrestricted picklist when its restricted is false', () => {
        expect(buildField({
            type: 'Picklist',
            restricted: 'false',
        }).isUnrestrictedPicklist()).to.equal(true);
    });

    it('is not an unrestricted picklist when its restricted is true', () => {
        expect(buildField({
            type: 'Picklist',
            restricted: 'true',
        }).isUnrestrictedPicklist()).to.equal(false);
    });

    it('is not an unrestricted picklist when it is not a picklist', () => {
        expect(buildField({
            type: 'Text',
        }).isUnrestrictedPicklist()).to.equal(false);
    });
});
