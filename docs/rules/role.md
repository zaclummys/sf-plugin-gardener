# Role

[Back to catalog](README.md)

## `role/description-required`

Same as `custom-object/description-required`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `minLength`: minimum description length in characters

**Example:**

```json
{
  "rules": {
    "role/description-required": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "minLength": 20
    }
  }
}
```

## `role/max-hierarchy-depth`

A role hierarchy deeper than N levels. A deep hierarchy slows sharing recalculation and makes access hard to reason about.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `max`: N, number of levels from the root role. Required

**Example:**

```json
{
  "rules": {
    "role/max-hierarchy-depth": {
      "severity": "warn",
      "max": 10
    }
  }
}
```

## `role/no-circular-parent`

Reports a `parentRole` chain that leads back to the role itself, because the hierarchy becomes invalid.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "role/no-circular-parent": "error"
  }
}
```
