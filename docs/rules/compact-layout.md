# CompactLayout

[Back to catalog](README.md)

## `compact-layout/description-required`

Same as `custom-object/description-required`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `minLength`: minimum description length in characters

**Example:**

```json
{
  "rules": {
    "compact-layout/description-required": {
      "severity": "error",
      "minLength": 20
    }
  }
}
```

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

**Example:**

```json
{
  "rules": {
    "compact-layout/assigned": {
      "severity": "warn"
    }
  }
}
```
