# SharingRules

[Back to catalog](README.md)

## `sharing-rules/description-required`

Same as `custom-object/description-required`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `minLength`: minimum description length in characters

**Example:**

```json
{
  "rules": {
    "sharing-rules/description-required": {
      "severity": "error",
      "minLength": 20
    }
  }
}
```

## `sharing-rules/boolean-filter-valid`

Same as `list-view/boolean-filter-valid`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "sharing-rules/boolean-filter-valid": "error"
  }
}
```

## `sharing-rules/no-guest-sharing-rule`

Any guest sharing rule exposes data to an unauthenticated user and is reported.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "sharing-rules/no-guest-sharing-rule": {
      "severity": "error"
    }
  }
}
```

## `sharing-rules/no-share-with-all-users`

Sharing with all internal, partner or portal users is reported.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "sharing-rules/no-share-with-all-users": {
      "severity": "error"
    }
  }
}
```

## `sharing-rules/sharing-edit-access-justified`

Reports write `accessLevel` on a criteria rule, because mass write via sharing is usually an accident.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "sharing-rules/sharing-edit-access-justified": {
      "severity": "warn"
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
