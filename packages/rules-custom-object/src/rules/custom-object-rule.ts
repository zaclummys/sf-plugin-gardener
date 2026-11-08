import { Rule, type ComponentFiles } from '@sf-plugin-gardener/core';
import { CustomObjectFiles } from '../files/custom-object-files.js';

export abstract class CustomObjectRule extends Rule<CustomObjectFiles> {
    protected read(componentFiles: ComponentFiles): CustomObjectFiles {
        return CustomObjectFiles.from({
            componentFiles,
        });
    }
}
