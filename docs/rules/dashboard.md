# Dashboard

[Back to catalog](README.md)

Applies `description-required`.

## `dashboard/no-specific-running-user`

Applies `no-specific-user-reference` to `runningUser`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "dashboard/no-specific-running-user": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `dashboard/logged-in-user-preferred`

`dashboardType` equal to `SpecifiedUser` requires an allowlist. Each user should see what they can see.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "dashboard/logged-in-user-preferred": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```
