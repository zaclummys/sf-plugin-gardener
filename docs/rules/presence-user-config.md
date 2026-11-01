# PresenceUserConfig

[Back to catalog](README.md)

Applies `no-specific-user-reference` to overflow and individual assignments.

## `presence-user-config/assign-by-profile`

Reports a presence assignment per individual user, because assignment by profile survives turnover.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "presence-user-config/assign-by-profile": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `presence-user-config/decline-reasons-consistent`

Reports an enabled decline reason with no registered reason.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "presence-user-config/decline-reasons-consistent": "warn"
  }
}
```
