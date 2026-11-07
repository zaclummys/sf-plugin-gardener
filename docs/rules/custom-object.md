# CustomObject

[Back to catalog](README.md)

## `custom-object/description-required`

Every custom component needs a filled-in description. The description is the context that humans and AI read before touching the component.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `minLength`: minimum description length in characters

**Example:**

```json
{
  "rules": {
    "custom-object/description-required": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "minLength": 20
    }
  }
}
```

## `custom-object/naming-convention`

The API name must follow the pattern configured for the type. Suffixes such as `_v2`, `_old`, `_del`, `_final` and prefixes such as `Copy_of` are forbidden.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `patterns`: map from metadata type to a regular expression for the name
- `forbiddenSuffixes`: list of forbidden suffixes
- `forbiddenPrefixes`: list of forbidden prefixes

**Example:**

```json
{
  "rules": {
    "custom-object/naming-convention": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "patterns": {
        "CustomField": "^[A-Z][A-Za-z0-9]*__c$"
      },
      "forbiddenSuffixes": [
        "_v2",
        "_old",
        "_del",
        "_final"
      ],
      "forbiddenPrefixes": [
        "Copy_of"
      ]
    }
  }
}
```

## `custom-object/sharing-model-explicit`

The object must declare `sharingModel` explicitly in the XML. The same holds for `externalSharingModel`, which controls external user access.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-object/sharing-model-explicit": "error"
  }
}
```

## `custom-object/forbidden-sharing-models`

A forbidden value such as `ReadWrite` in `sharingModel` or `externalSharingModel` requires justification via allowlist.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: objects authorized to use a forbidden model
- `forbiddenModels`: values that only pass if the object is in the `allowlist`. Required

**Example:**

```json
{
  "rules": {
    "custom-object/forbidden-sharing-models": {
      "severity": "error",
      "allowlist": [
        "Account"
      ],
      "forbiddenModels": [
        "ReadWrite"
      ]
    }
  }
}
```

## `custom-object/external-sharing-model-not-wider`

External sharing more permissive than internal requires an allowlist.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-object/external-sharing-model-not-wider": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `custom-object/deployment-status-deployed`

Reports an object with `deploymentStatus` equal to `InDevelopment`, because it is almost always a leftover that makes the object invisible in production.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-object/deployment-status-deployed": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `custom-object/no-default-action-override`

An `actionOverrides` entry with `type` equal to `Default` and no `content` must be removed. The retrieve dumps dozens of these inert entries, which are pure diff noise and which agents copy to new objects.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

The entry below is inert and must be removed.

```xml
<actionOverrides>
  <actionName>Accept</actionName>
  <type>Default</type>
</actionOverrides>
```

Configuration:

```json
{
  "rules": {
    "custom-object/no-default-action-override": "error"
  }
}
```

## `custom-object/history-tracking-requires-object-enabled`

A field with `trackHistory` true requires `enableHistory` true on the parent object.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-object/history-tracking-requires-object-enabled": "error"
  }
}
```

## `custom-object/feed-history-tracking-requires-feeds-enabled`

A field with `trackFeedHistory` true requires `enableFeeds` true on the parent object.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-object/feed-history-tracking-requires-feeds-enabled": "error"
  }
}
```

## `custom-object/max-fields-per-object`

An object with more than N fields. A high limit suggests an object with too much responsibility, and the platform enforces a ceiling that depends on the edition.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `max`: N, number of custom fields. Required

**Reference:** [Salesforce documentation](https://developer.salesforce.com/docs/platform/salesforce-app-limits-cheatsheet/guide/salesforce-app-limits-platform-metadata.html)

**Example:**

```json
{
  "rules": {
    "custom-object/max-fields-per-object": {
      "severity": "error",
      "max": 500
    }
  }
}
```

## `custom-object/history-tracking-limit`

An object with more than N fields with history enabled. The platform ceiling rises with the Field Audit Trail add-on.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `max`: N, number of fields with history. Required

**Reference:** [Salesforce documentation](https://developer.salesforce.com/docs/platform/salesforce-app-limits-cheatsheet/guide/salesforce-app-limits-platform-metadata.html)

**Example:**

```json
{
  "rules": {
    "custom-object/history-tracking-limit": {
      "severity": "error",
      "max": 20
    }
  }
}
```

## `custom-object/max-object-relationships`

An object with more than N relationship fields, between lookups and master-details. Excess signals an object that is too central, and the platform enforces a ceiling.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `max`: N, number of relationship fields. Required

**Reference:** [Salesforce documentation](https://developer.salesforce.com/docs/platform/salesforce-app-limits-cheatsheet/guide/salesforce-app-limits-platform-metadata.html)

**Example:**

```json
{
  "rules": {
    "custom-object/max-object-relationships": {
      "severity": "error",
      "max": 40
    }
  }
}
```

## `custom-object/max-master-detail-per-object`

An object with more than N master-detail relationships, a limit the platform enforces.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `max`: N, number of master-details. Required

**Reference:** [Salesforce documentation](https://developer.salesforce.com/docs/platform/salesforce-app-limits-cheatsheet/guide/salesforce-app-limits-platform-metadata.html)

**Example:**

```json
{
  "rules": {
    "custom-object/max-master-detail-per-object": {
      "severity": "error",
      "max": 2
    }
  }
}
```

## `custom-object/max-rollup-summary-fields-per-object`

An object with more than N roll-up summary fields, a limit the platform enforces.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `max`: N, number of roll-ups. Required

**Reference:** [Salesforce documentation](https://developer.salesforce.com/docs/platform/salesforce-app-limits-cheatsheet/guide/salesforce-app-limits-platform-metadata.html)

**Example:**

```json
{
  "rules": {
    "custom-object/max-rollup-summary-fields-per-object": {
      "severity": "error",
      "max": 25
    }
  }
}
```

## `custom-object/prefer-custom-metadata`

A new list custom setting is forbidden. Custom metadata versions better and travels in the deploy.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-object/prefer-custom-metadata": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `custom-object/hierarchy-setting-allowed`

A hierarchy custom setting is allowed only for per-user or per-profile configuration.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-object/hierarchy-setting-allowed": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `custom-object/custom-setting-visibility-explicit`

The custom setting object must declare the `visibility` element explicitly.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-object/custom-setting-visibility-explicit": "error"
  }
}
```
