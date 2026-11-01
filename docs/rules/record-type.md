# RecordType

[Back to catalog](README.md)

Applies `description-required`, `naming-convention` and `no-inactive-component`. Applies `custom-field/single-default-picklist-value` to each `picklistValues`.

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
