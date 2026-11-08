import { CustomObject } from '../../lib/custom-object.js';

type ObjectData = {
    deploymentStatus?: string | null;
    sharingModel?: string | null;
};

/**
 * Builds an object in memory, with only the data that a test cares about.
 *
 * @param data The data that the object declares.
 */
export function buildObject(data: ObjectData): CustomObject {
    return new CustomObject({
        name: 'Sample__c',
        deploymentStatus: data.deploymentStatus ?? null,
        sharingModel: data.sharingModel ?? null,
    });
}
