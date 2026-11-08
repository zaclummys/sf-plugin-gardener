import { Rule, type ComponentFiles } from '@sf-plugin-gardener/core';
import { CustomObjectFiles } from '../files/index.js';

export abstract class CustomObjectRule extends Rule<CustomObjectFiles> {
    protected read(componentFiles: ComponentFiles): CustomObjectFiles {
        return CustomObjectFiles.from({
            componentFiles,
        });
    }
}
