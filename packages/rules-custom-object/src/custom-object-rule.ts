import { Rule, type Components } from '@sf-plugin-gardener/core';
import { CustomObjects } from './custom-objects.js';

export abstract class CustomObjectRule extends Rule<CustomObjects> {
    protected read(components: Components): CustomObjects {
        return CustomObjects.from({
            components,
        });
    }
}
