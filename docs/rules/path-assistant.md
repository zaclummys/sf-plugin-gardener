# PathAssistant

[Back to catalog](README.md)

Applies `naming-convention` and `no-inactive-component`.

## `path-assistant/step-info-required`

Every step must have the `info` guidance text, because per-step guidance is the value of the feature.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "path-assistant/step-info-required": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `path-assistant/covers-picklist-values`

Reports an active picklist value with no matching step.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "path-assistant/covers-picklist-values": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```
