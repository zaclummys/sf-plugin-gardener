import { Rule, type Components } from '@sf-plugin-gardener/core';
import { CustomFields } from './custom-fields.js';

export abstract class CustomFieldRule extends Rule<CustomFields> {
    protected read(components: Components): CustomFields {
        return CustomFields.from({
            components,
        });
    }
}
