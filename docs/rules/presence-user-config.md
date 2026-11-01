# PresenceUserConfig

[Back to catalog](README.md)

## `presence-user-config/no-specific-user-reference`

Same as `approval-process/no-specific-user-reference`. Applies to overflow and individual assignments.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: exempt usernames

**Example:**

```json
{
  "rules": {
    "presence-user-config/no-specific-user-reference": {
      "severity": "warn",
      "allowlist": [
        "integration@example.com"
      ]
    }
  }
}
```

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
