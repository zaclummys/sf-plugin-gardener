import { expect } from 'chai';
import { buildObject } from './build-object.ts';

describe('CustomObject deployment status', () => {
    it('returns its name', () => {
        expect(buildObject({}).getName()).to.equal('Sample__c');
    });

    it('is in development when its deploymentStatus is InDevelopment', () => {
        expect(buildObject({
            deploymentStatus: 'InDevelopment',
        }).isInDevelopment()).to.equal(true);
    });

    it('is not in development when its deploymentStatus is Deployed', () => {
        expect(buildObject({
            deploymentStatus: 'Deployed',
        }).isInDevelopment()).to.equal(false);
    });

    it('is not in development when it declares no deploymentStatus', () => {
        expect(buildObject({}).isInDevelopment()).to.equal(false);
    });
});
