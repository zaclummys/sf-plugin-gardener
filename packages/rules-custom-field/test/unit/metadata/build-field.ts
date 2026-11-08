import { CustomField } from '../../../lib/metadata/custom-field.js';

type FieldData = {
    description?: string | null;
    securityClassification?: string | null;
    complianceGroup?: string | null;
    type?: string | null;
    restricted?: string | null;
};

/**
 * Builds a field in memory, with only the data that a test cares about.
 *
 * @param data The data that the field declares.
 */
export function buildField(data: FieldData): CustomField {
    return new CustomField({
        name: 'Sample__c.Code__c',
        description: data.description ?? null,
        securityClassification: data.securityClassification ?? null,
        complianceGroup: data.complianceGroup ?? null,
        type: data.type ?? null,
        restricted: data.restricted ?? null,
    });
}
