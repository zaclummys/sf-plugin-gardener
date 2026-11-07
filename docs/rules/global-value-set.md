# GlobalValueSet

[Back to catalog](README.md)

Applies `custom-field/single-default-picklist-value` to the values.

## `global-value-set/description-required`

Same as `custom-object/description-required`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `minLength`: minimum description length in characters

**Example:**

```json
{
  "rules": {
    "global-value-set/description-required": {
      "severity": "error",
      "minLength": 20
    }
  }
}
```

