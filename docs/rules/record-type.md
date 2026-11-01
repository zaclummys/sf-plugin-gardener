# RecordType

[Back to catalog](README.md)

Applies `custom-field/single-default-picklist-value` to each `picklistValues`.

## `record-type/description-required`

Same as `custom-object/description-required`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `minLength`: minimum description length in characters

**Example:**

```json
{
  "rules": {
    "record-type/description-required": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "minLength": 20
    }
  }
}
```

## `record-type/naming-convention`

Same as `custom-object/naming-convention`.

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
    "record-type/naming-convention": {
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

## `record-type/no-inactive-component`

Same as `flow/no-inactive-component`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "record-type/no-inactive-component": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `record-type/assigned`

Reports a record type with no assignment in any profile or permission set.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "record-type/assigned": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `record-type/business-process-required-for-process-objects`

A record type of Opportunity, Case, Lead or Solution must declare `businessProcess`, because the deploy fails without it and agents frequently forget this element.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `objects`: objects that require `businessProcess`, with the four mentioned as the default

**Example:**

```json
{
  "rules": {
    "record-type/business-process-required-for-process-objects": {
      "severity": "error",
      "objects": [
        "Opportunity",
        "Case",
        "Lead",
        "Solution"
      ]
    }
  }
}
```

## `record-type/picklist-value-exists`

Each value in `picklistValues` must exist in the value set of the corresponding field. It is an offline cross-check between files that avoids a broken deploy.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "record-type/picklist-value-exists": "error"
  }
}
```

## `record-type/max-record-types-per-object`

An object with more than N record types.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `max`: N, number of record types per object. Required

**Example:**

```json
{
  "rules": {
    "record-type/max-record-types-per-object": {
      "severity": "warn",
      "max": 10
    }
  }
}
```
