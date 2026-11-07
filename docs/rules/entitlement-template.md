# EntitlementTemplate

[Back to catalog](README.md)

Applies the same cross-cutting rules as [EntitlementProcess](entitlement-process.md).

## `entitlement-template/description-required`

Same as `custom-object/description-required`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `minLength`: minimum description length in characters

**Example:**

```json
{
  "rules": {
    "entitlement-template/description-required": {
      "severity": "error",
      "minLength": 20
    }
  }
}
```

## `entitlement-template/no-inactive-component`

Same as `flow/no-inactive-component`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "entitlement-template/no-inactive-component": {
      "severity": "warn"
    }
  }
}
```

## `entitlement-template/per-incident-cases`

Reports a per-incident template without `casesPerEntitlement`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "entitlement-template/per-incident-cases": "warn"
  }
}
```
