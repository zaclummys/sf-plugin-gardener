# SharingRules

[Back to catalog](README.md)

Applies `description-required` and `boolean-filter-valid`.

## `sharing-rules/no-guest-sharing-rule`

Any guest sharing rule exposes data to an unauthenticated user and requires an allowlist.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "sharing-rules/no-guest-sharing-rule": {
      "severity": "error",
      "allowlist": [
        "Public_Account"
      ]
    }
  }
}
```

## `sharing-rules/no-share-with-all-users`

Sharing with all internal, partner or portal users requires an allowlist.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "sharing-rules/no-share-with-all-users": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `sharing-rules/sharing-edit-access-justified`

Reports write `accessLevel` on a criteria rule, because mass write via sharing is usually an accident.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "sharing-rules/sharing-edit-access-justified": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `sharing-rules/max-sharing-rules-per-object`

An object with more than N sharing rules, a limit the platform enforces.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `max`: N, total number of sharing rules. Required

**Reference:** [Salesforce documentation](https://developer.salesforce.com/docs/platform/salesforce-app-limits-cheatsheet/guide/salesforce-app-limits-platform-metadata.html)

**Example:**

```json
{
  "rules": {
    "sharing-rules/max-sharing-rules-per-object": {
      "severity": "error",
      "max": 300
    }
  }
}
```

## `sharing-rules/max-criteria-sharing-rules-per-object`

An object with more than N criteria-based sharing rules, a limit the platform enforces.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `max`: N, number of criteria-based sharing rules. Required

**Reference:** [Salesforce documentation](https://developer.salesforce.com/docs/platform/salesforce-app-limits-cheatsheet/guide/salesforce-app-limits-platform-metadata.html)

**Example:**

```json
{
  "rules": {
    "sharing-rules/max-criteria-sharing-rules-per-object": {
      "severity": "error",
      "max": 50
    }
  }
}
```
