# Queue

[Back to catalog](README.md)

## `queue/no-specific-user-reference`

Same as `approval-process/no-specific-user-reference`. Applies to individual members.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: exempt usernames

**Example:**

```json
{
  "rules": {
    "queue/no-specific-user-reference": {
      "severity": "warn",
      "allowlist": [
        "integration@example.com"
      ]
    }
  }
}
```

## `queue/has-sobject`

Reports a queue with no `queueSobject`, because it routes nothing.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "queue/has-sobject": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `queue/email-domain-allowlist`

The queue `email` must belong to a configured domain, because a personal address creates a dependency on one person.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `allowedDomains`: [accepted email domains](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "queue/email-domain-allowlist": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "allowedDomains": [
        "example.com"
      ]
    }
  }
}
```
