# CustomField

[Back to catalog](README.md)

Applies `description-required` and `naming-convention`.

## `custom-field/help-text-recommended`

Reports a field visible on a layout without help text.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-field/help-text-recommended": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `custom-field/formula-depth-limit`

A formula that references another formula beyond depth N.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `max`: N, maximum depth. Required

**Example:**

```json
{
  "rules": {
    "custom-field/formula-depth-limit": {
      "severity": "warn",
      "max": 3
    }
  }
}
```

## `custom-field/formula-max-length`

A formula with more than N characters of text. A long formula should be split into smaller formula fields, and the platform enforces a ceiling on the text. The compiled size cannot be computed offline, so the rule considers only the text.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `max`: N, number of characters in the formula text. Required

**Reference:** [Salesforce documentation](https://developer.salesforce.com/docs/platform/salesforce-app-limits-cheatsheet/guide/salesforce-app-limits-platform-metadata.html)

**Example:**

```json
{
  "rules": {
    "custom-field/formula-max-length": {
      "severity": "error",
      "max": 5000
    }
  }
}
```

## `custom-field/formula-max-cross-object-references`

A formula that crosses more than N distinct relationships couples the field to several objects. Complements `custom-field/formula-depth-limit`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `max`: N, number of distinct relationships. Required

**Example:**

```json
{
  "rules": {
    "custom-field/formula-max-cross-object-references": {
      "severity": "warn",
      "max": 3
    }
  }
}
```
## `custom-field/formula-clean`

Applies `no-hardcoded-id` and `no-hardcoded-url` inside the formula text and the `defaultValue`, which is also a formula.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

The configuration of the two applied rules still applies.

**Example:**

```json
{
  "rules": {
    "custom-field/formula-clean": "error"
  }
}
```

## `custom-field/picklist-restricted`

A picklist must restrict values to the defined list.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-field/picklist-restricted": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `custom-field/picklist-prefer-global-value-set`

The same set of values repeated in more than one field should become a global value set.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `minOccurrences`: number of fields with the same set from which the rule fires
- `minValues`: minimum size of the set

**Example:**

```json
{
  "rules": {
    "custom-field/picklist-prefer-global-value-set": {
      "severity": "error",
      "minOccurrences": 2,
      "minValues": 3
    }
  }
}
```

## `custom-field/no-required-without-default-consideration`

Reports a field changed to required on an existing object, because it breaks integrations and old records.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-field/no-required-without-default-consideration": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `custom-field/data-classification-required`

The `securityClassification` and `complianceGroup` elements must be filled in. The classification tells humans and AI how sensitive the field is before exposing it in a layout, report or integration.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `requiredElements`: required elements, with the two mentioned as the default

**Example:**

```json
{
  "rules": {
    "custom-field/data-classification-required": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "requiredElements": [
        "securityClassification",
        "complianceGroup"
      ]
    }
  }
}
```

## `custom-field/external-id-should-be-unique`

Reports a field with `externalId` true and `unique` not true, because upsert by a non-unique external id fails on duplicates.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-field/external-id-should-be-unique": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `custom-field/no-classic-encrypted-field`

A new field of type `EncryptedText` is forbidden, because classic encryption is legacy compared to Shield Platform Encryption.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-field/no-classic-encrypted-field": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `custom-field/formula-treat-blanks-explicit`

Reports a numeric formula without `formulaTreatBlanksAs`, because the default silently propagates nulls.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-field/formula-treat-blanks-explicit": "warn"
  }
}
```

## `custom-field/no-history-on-formula-field`

`trackHistory` true on a formula field is an invalid configuration that the deploy rejects.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-field/no-history-on-formula-field": "error"
  }
}
```

## `custom-field/single-default-picklist-value`

At most one value with `default` true per value set. It is a classic agent mistake when adding values.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-field/single-default-picklist-value": "error"
  }
}
```

## `custom-field/no-inactive-picklist-value`

Reports a value with `isActive` false, via `no-inactive-component`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-field/no-inactive-picklist-value": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `custom-field/restrict-delete-explicit`

Reports a lookup without a declared `deleteConstraint`, because the silent `SetNull` default erases the reference when the parent is deleted.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-field/restrict-delete-explicit": "warn"
  }
}
```

## `custom-field/lookup-filter-error-message-quality`

Applies `validation-rule/error-message-quality` to the `errorMessage` of an active lookup filter.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

The configuration of `validation-rule/error-message-quality` still applies.

**Example:**

```json
{
  "rules": {
    "custom-field/lookup-filter-error-message-quality": "error"
  }
}
```

## `custom-field/max-picklist-values-per-field`

A picklist with more than N active values.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `max`: N, number of active values. Required

**Example:**

```json
{
  "rules": {
    "custom-field/max-picklist-values-per-field": {
      "severity": "warn",
      "max": 50
    }
  }
}
```

## `custom-field/max-help-text-length`

Help text with more than N characters, a limit the platform enforces at deploy.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `max`: N, number of characters in the help text. Required

**Reference:** [Salesforce documentation](https://developer.salesforce.com/docs/platform/salesforce-app-limits-cheatsheet/guide/salesforce-app-limits-platform-metadata.html)

**Example:**

```json
{
  "rules": {
    "custom-field/max-help-text-length": {
      "severity": "error",
      "max": 510
    }
  }
}
```
