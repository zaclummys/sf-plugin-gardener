# CustomPermission

[Back to catalog](README.md)

## `custom-permission/description-required`

Same as `custom-object/description-required`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `minLength`: minimum description length in characters

**Example:**

```json
{
  "rules": {
    "custom-permission/description-required": {
      "severity": "error",
      "minLength": 20
    }
  }
}
```

