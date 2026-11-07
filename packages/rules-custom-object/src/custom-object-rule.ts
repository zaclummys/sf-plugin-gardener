import { Rule, type Finding, type Project } from '@sf-plugin-gardener/core';
import { CustomObjects } from './custom-objects.js';

export abstract class CustomObjectRule extends Rule {
    public check({ project }: { project: Project }): Finding[] {
        const customObjects = CustomObjects.from({
            project,
        });

        return this.checkObjects({
            customObjects,
        });
    }

    /**
     * Checks the custom objects and reports what the rule finds.
     *
     * @param customObjects The custom objects to check.
     */
    public abstract checkObjects({ customObjects }: { customObjects: CustomObjects }): Finding[];
}
