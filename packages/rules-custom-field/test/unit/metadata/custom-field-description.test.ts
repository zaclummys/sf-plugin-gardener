import { expect } from 'chai';
import { DescriptionLength } from '../../../lib/metadata/description-length.js';
import { buildField } from './build-field.ts';

describe('CustomField description', () => {
    it('returns its name', () => {
        expect(buildField({}).getName()).to.equal('Sample__c.Code__c');
    });

    it('is undescribed when it declares no description', () => {
        expect(buildField({}).isUndescribed()).to.equal(true);
    });

    it('is described when it declares a description', () => {
        expect(buildField({
            description: 'The code of the sample.',
        }).isUndescribed()).to.equal(false);
    });

    it('has a description shorter than a length when it has fewer characters', () => {
        const field = buildField({
            description: 'Too short',
        });

        expect(field.hasDescriptionShorterThan(new DescriptionLength(20))).to.equal(true);
    });

    it('has no description shorter than a length when it has as many characters', () => {
        const field = buildField({
            description: 'Exactly twenty chars',
        });

        expect(field.hasDescriptionShorterThan(new DescriptionLength(20))).to.equal(false);
    });

    it('has no description shorter than a length when it declares none', () => {
        expect(buildField({}).hasDescriptionShorterThan(new DescriptionLength(20))).to.equal(false);
    });
});
