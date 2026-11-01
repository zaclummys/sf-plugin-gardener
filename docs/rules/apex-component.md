# ApexComponent

[Back to catalog](README.md)

The scope is the same as [LWC](lwc.md).

## `apex-component/no-new-component`

Same as `apex-page/no-new-page`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "apex-component/no-new-component": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```
