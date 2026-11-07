import { Rule, type Finding, type Project, type Severity, type SharingModels } from '../../core/index.js';

export class ForbiddenSharingModelsRule extends Rule {
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

    public check({ project }: { project: Project }): Finding[] {
        const customObjects = project.getCustomObjects();
        const objects = customObjects.listWithSharingModelIn(this.forbiddenModels);

        return objects.map((object) => this.reportFile({
            message: `The object ${object.getName()} has the forbidden sharingModel ${String(object.getSharingModel())}.`,
            file: object.getPath(),
        }));
    }
}
