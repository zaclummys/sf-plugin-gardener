import type { Description } from './description.js';
import type { DescriptionLength } from './description-length.js';

export class CustomField {
    private readonly name: string;
    private readonly path: string;
    private readonly description: Description | null;
    private readonly securityClassified: boolean;
    private readonly complianceGrouped: boolean;

    /**
     * @param name The full name of the field, such as Sample__c.Code__c.
     * @param path The path of the field file, relative to the project.
     * @param description The description that the field declares, or null when it declares none.
     * @param securityClassified Whether the field declares a securityClassification.
     * @param complianceGrouped Whether the field declares a complianceGroup.
     */
    public constructor({
        name, path, description, securityClassified, complianceGrouped,
    }: {
        name: string;
        path: string;
        description: Description | null;
        securityClassified: boolean;
        complianceGrouped: boolean;
    }) {
        this.name = name;
        this.path = path;
        this.description = description;
        this.securityClassified = securityClassified;
        this.complianceGrouped = complianceGrouped;
    }

    /** Returns the full name of the field, such as Sample__c.Code__c. */
    public getName(): string {
        return this.name;
    }

    /** Returns the path of the field file, relative to the project. */
    public getPath(): string {
        return this.path;
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
}
