# FieldSet

[Back to catalog](README.md)

Applies `description-required`.

## `field-set/no-empty-field-set`

A field set with no displayed or available field is dead metadata. A dynamic reference in Apex may escape the static search, so the allowlist matters here.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "field-set/no-empty-field-set": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```
