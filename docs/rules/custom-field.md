# CustomField

[Back to catalog](README.md)

## `custom-field/no-hardcoded-id`

Same as `flow/no-hardcoded-id`. Applies to the formula text and to the `defaultValue`, which is also a formula.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `exemptElements`: names of XML elements added to the built-in list of exemptions

**Example:**

```json
{
  "rules": {
    "custom-field/no-hardcoded-id": {
      "severity": "error",
      "exemptElements": [
        "requestSigningCertId"
      ]
    }
  }
}
```

## `custom-field/no-hardcoded-url`

Same as `custom-tab/no-hardcoded-url`. Applies to the formula text and to the `defaultValue`, which is also a formula.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `forbiddenHostPatterns`: forbidden host patterns, with `*.my.salesforce.com` included by default

**Example:**

```json
{
  "rules": {
    "custom-field/no-hardcoded-url": {
      "severity": "error",
      "forbiddenHostPatterns": [
        "*.my.salesforce.com"
      ]
    }
  }
}
```

## `custom-field/error-message-quality`

Same as `validation-rule/error-message-quality`. Applies to the `errorMessage` of an active lookup filter.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `minLength`: minimum message length in characters
- `genericMessages`: forbidden generic texts

**Example:**

```json
{
  "rules": {
    "custom-field/error-message-quality": {
      "severity": "error",
      "minLength": 30,
      "genericMessages": [
        "Invalid value",
        "Error"
      ]
    }
  }
}
```

## `custom-field/no-inactive-component`

Same as `flow/no-inactive-component`. Applies to picklist values, through `isActive`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-field/no-inactive-component": {
      "severity": "warn"
    }
  }
}
```

## `custom-field/description-required`

Same as `custom-object/description-required`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `minLength`: minimum description length in characters. Required

**Example:**

```json
{
  "rules": {
    "custom-field/description-required": {
      "severity": "error",
      "minLength": 20
    }
  }
}
```

## `custom-field/naming-convention`

Same as `custom-object/naming-convention`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `patterns`: map from metadata type to a regular expression for the name
- `forbiddenSuffixes`: list of forbidden suffixes
- `forbiddenPrefixes`: list of forbidden prefixes

**Example:**

```json
{
  "rules": {
    "custom-field/naming-convention": {
      "severity": "error",
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

## `custom-field/help-text-recommended`

Reports a field visible on a layout without help text.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-field/help-text-recommended": {
      "severity": "warn"
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
## `custom-field/picklist-restricted`

A picklist must restrict values to the defined list.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-field/picklist-restricted": {
      "severity": "error"
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

**Example:**

```json
{
  "rules": {
    "custom-field/no-required-without-default-consideration": {
      "severity": "warn"
    }
  }
}
```

## `custom-field/security-classification-required`

The `securityClassification` element must be filled in. The classification tells humans and AI how sensitive the field is before exposing it in a layout, report or integration.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-field/security-classification-required": "error"
  }
}
```

## `custom-field/compliance-group-required`

The `complianceGroup` element must be filled in. The group tells humans and AI which regulation covers the field before exposing it in a layout, report or integration.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-field/compliance-group-required": "error"
  }
}
```

## `custom-field/external-id-should-be-unique`

Reports a field with `externalId` true and `unique` not true, because upsert by a non-unique external id fails on duplicates.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-field/external-id-should-be-unique": {
      "severity": "warn"
    }
  }
}
```

## `custom-field/no-classic-encrypted-field`

A new field of type `EncryptedText` is forbidden, because classic encryption is legacy compared to Shield Platform Encryption.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-field/no-classic-encrypted-field": {
      "severity": "error"
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
