# FieldSet

[Back to catalog](README.md)

## `field-set/description-required`

Same as `custom-object/description-required`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `minLength`: minimum description length in characters

**Example:**

```json
{
  "rules": {
    "field-set/description-required": {
      "severity": "error",
      "minLength": 20
    }
  }
}
```

## `field-set/no-empty-field-set`

A field set with no displayed or available field is dead metadata. A dynamic reference in Apex may escape the static search.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "field-set/no-empty-field-set": {
      "severity": "error"
    }
  }
}
```
