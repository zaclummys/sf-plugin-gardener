# CompactLayout

[Back to catalog](README.md)

Applies `description-required`.

## `compact-layout/no-empty-compact-layout`

A compact layout without fields is dead metadata.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "compact-layout/no-empty-compact-layout": "error"
  }
}
```

## `compact-layout/assigned`

Reports a compact layout without a `compactLayoutAssignment` on the object or on a record type.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "compact-layout/assigned": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```
