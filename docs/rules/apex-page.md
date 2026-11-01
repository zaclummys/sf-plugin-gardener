# ApexPage

[Back to catalog](README.md)

The scope is the same as [LWC](lwc.md).

## `apex-page/no-new-page`

A new Visualforce page requires an allowlist in the configuration.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "apex-page/no-new-page": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `apex-page/csrf-token-recommended`

Reports a Visualforce page without `confirmationTokenRequired` true, because the default exposes GET actions to CSRF.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "apex-page/csrf-token-recommended": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```
