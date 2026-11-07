import { Rule, type ComponentFiles } from '@sf-plugin-gardener/core';
import { CustomFieldFiles } from './custom-field-files.js';

export abstract class CustomFieldRule extends Rule<CustomFieldFiles> {
    protected read(componentFiles: ComponentFiles): CustomFieldFiles {
        return CustomFieldFiles.from({
            componentFiles,
        });
    }
}
