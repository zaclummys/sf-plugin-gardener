# EntitlementProcess

[Back to catalog](README.md)

Applies `description-required` and `no-inactive-component`.

## `entitlement-process/single-default-version`

Reports more than one default version for the same process, an error that would only show up at deploy.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "entitlement-process/single-default-version": "error"
  }
}
```

## `entitlement-process/exit-criteria-required`

Reports a process without exit criteria, because it never ends and accumulates violated milestones.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "entitlement-process/exit-criteria-required": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```
