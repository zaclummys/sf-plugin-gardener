# BusinessProcess

[Back to catalog](README.md)

## `business-process/description-required`

Same as `custom-object/description-required`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `minLength`: minimum description length in characters

**Example:**

```json
{
  "rules": {
    "business-process/description-required": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "minLength": 20
    }
  }
}
```

## `business-process/no-inactive-component`

Same as `flow/no-inactive-component`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "business-process/no-inactive-component": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `business-process/values-exist`

Each listed value must exist in the corresponding value set when it is versioned.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "business-process/values-exist": "error"
  }
}
```
