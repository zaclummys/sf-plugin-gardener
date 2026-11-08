import type { Finding, Severity } from '@sf-plugin-gardener/core';
import { CustomObjectRule } from '../custom-object-rule.js';
import type { CustomObjectFiles } from '../custom-object-files.js';
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

    public check(customObjectFiles: CustomObjectFiles): Finding[] {
        const files = customObjectFiles.listWithSharingModelIn(this.forbiddenModels);

        return files.map((file) => this.reportFile({
            message: `The object ${file.getCustomObject().getName()} has the forbidden sharingModel ${String(file.getCustomObject().getSharingModel())}.`,
            file: file.getPath(),
        }));
    }
}
