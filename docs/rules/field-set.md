# FieldSet

[Back to catalog](README.md)

## `field-set/description-required`

Same as `custom-object/description-required`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `minLength`: minimum description length in characters

**Example:**

```json
{
  "rules": {
    "field-set/description-required": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "minLength": 20
    }
  }
}
```

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
