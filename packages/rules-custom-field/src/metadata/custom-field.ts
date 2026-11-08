import { Description } from './description.js';
import type { DescriptionLength } from './description-length.js';

export class CustomField {
    private readonly name: string;
    private readonly description: Description | null;
    private readonly securityClassified: boolean;
    private readonly complianceGrouped: boolean;
    private readonly picklist: boolean;
    private readonly restricted: boolean;

    /**
     * @param name The full name of the field, such as Sample__c.Code__c.
     * @param description The description that the field declares, if any.
     * @param securityClassification The securityClassification that the field declares, if any.
     * @param complianceGroup The complianceGroup that the field declares, if any.
     * @param type The type that the field declares, if any, such as Picklist.
     * @param restricted The restricted of the value set that the field declares, if any, as true or false.
     */
    public constructor({
        name, description, securityClassification, complianceGroup, type, restricted,
    }: {
        name: string;
        description: string | null;
        securityClassification: string | null;
        complianceGroup: string | null;
        type: string | null;
        restricted: string | null;
    }) {
        this.name = name;
        this.description = Description.from(description);
        this.securityClassified = securityClassification != null;
        this.complianceGrouped = complianceGroup != null;
        this.picklist = type === 'Picklist' || type === 'MultiselectPicklist';
        this.restricted = restricted === 'true';
    }

    /** Returns the full name of the field, such as Sample__c.Code__c. */
    public getName(): string {
        return this.name;
    }

    /** Tells whether the field declares no description. */
    public isUndescribed(): boolean {
        return this.description == null;
    }

    /**
     * Tells whether the field declares a description shorter than a length.
     *
     * @param length The length to compare with.
     */
    public hasDescriptionShorterThan(length: DescriptionLength): boolean {
        return this.description != null && length.exceeds(this.description.countCharacters());
    }

    /** Tells whether the field declares no securityClassification. */
    public lacksSecurityClassification(): boolean {
        return !this.securityClassified;
    }

    /** Tells whether the field declares no complianceGroup. */
    public lacksComplianceGroup(): boolean {
        return !this.complianceGrouped;
    }

    /** Tells whether the field is a picklist that is not restricted to its values. */
    public isUnrestrictedPicklist(): boolean {
        return this.picklist && !this.restricted;
    }
}
