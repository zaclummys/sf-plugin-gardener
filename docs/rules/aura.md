# Aura

[Back to catalog](README.md)

The scope is the same as [LWC](lwc.md).

## `aura/prefer-lwc`

A new Aura component is forbidden.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "aura/prefer-lwc": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```
