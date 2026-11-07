import type { CustomField as CustomFieldMetadata } from '@salesforce/types/metadata';
import type { Component } from '@sf-plugin-gardener/core';
import { Description } from './description.js';
import type { DescriptionLength } from './description-length.js';

export class CustomField {
    private readonly name: string;
    private readonly path: string;
    private readonly description: Description | null;
    private readonly securityClassified: boolean;
    private readonly complianceGrouped: boolean;
    private readonly picklist: boolean;
    private readonly restricted: boolean;

    /**
     * @param name The full name of the field, such as Sample__c.Code__c.
     * @param path The path of the field file, relative to the project.
     * @param description The description that the field declares, if any.
     * @param securityClassification The securityClassification that the field declares, if any.
     * @param complianceGroup The complianceGroup that the field declares, if any.
     * @param type The type that the field declares, if any, such as Picklist.
     * @param restricted The restricted of the value set that the field declares, if any, as true or false.
     */
    public constructor({
        name, path, description, securityClassification, complianceGroup, type, restricted,
    }: {
        name: string;
        path: string;
        description: string | null;
        securityClassification: string | null;
        complianceGroup: string | null;
        type: string | null;
        restricted: string | null;
    }) {
        this.name = name;
        this.path = path;
        this.description = Description.from(description);
        this.securityClassified = securityClassification != null;
        this.complianceGrouped = complianceGroup != null;
        this.picklist = type === 'Picklist' || type === 'MultiselectPicklist';
        this.restricted = restricted === 'true';
    }

    /**
     * Builds a field from a component of the CustomField type.
     *
     * @param component The component that holds the field file.
     */
    public static from({ component }: { component: Component }): CustomField {
        const content = component.getContent() as { CustomField: CustomFieldMetadata };
        const metadata = content.CustomField;

        return new CustomField({
            name: component.getName(),
            path: component.getPath(),
            description: metadata.description ?? null,
            securityClassification: metadata.securityClassification ?? null,
            complianceGroup: metadata.complianceGroup ?? null,
            type: metadata.type ?? null,
            restricted: metadata.valueSet?.restricted?.toString() ?? null,
        });
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

    /** Tells whether the field is a picklist that is not restricted to its values. */
    public isUnrestrictedPicklist(): boolean {
        return this.picklist && !this.restricted;
    }
}
