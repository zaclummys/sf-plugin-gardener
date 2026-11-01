# RoutingConfiguration

[Back to catalog](README.md)

## `routing-configuration/push-timeout-required`

Reports a routing configuration without `pushTimeout`, because an item pushed to an absent agent gets stuck.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "routing-configuration/push-timeout-required": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `routing-configuration/capacity-single-model`

Reports declaring both weight and capacity percentage, because the models are alternatives.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "routing-configuration/capacity-single-model": "error"
  }
}
```
