import type { Finding, Severity } from '@sf-plugin-gardener/core';
import { CustomObjectRule } from '../custom-object-rule.js';
import type { CustomObjects } from '../custom-objects.js';
import type { SharingModels } from '../sharing-models.js';

export class ForbiddenSharingModelsRule extends CustomObjectRule {
    private readonly forbiddenModels: SharingModels;

    public constructor({
        severity, forbiddenModels,
    }: {
        severity: Severity;
        forbiddenModels: SharingModels;
    }) {
        super({
            name: 'custom-object/forbidden-sharing-models',
            severity,
        });

        this.forbiddenModels = forbiddenModels;
    }

    public checkObjects({ customObjects }: { customObjects: CustomObjects }): Finding[] {
        const objects = customObjects.listWithSharingModelIn(this.forbiddenModels);

        return objects.map((object) => this.reportFile({
            message: `The object ${object.getName()} has the forbidden sharingModel ${String(object.getSharingModel())}.`,
            file: object.getPath(),
        }));
    }
}
