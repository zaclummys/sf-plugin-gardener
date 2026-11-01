# EscalationRules

[Back to catalog](README.md)

The rules are the same as in [AssignmentRules](assignment-rules.md). The type has no description element either.

## `escalation-rules/no-inactive-component`

Same as `flow/no-inactive-component`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "escalation-rules/no-inactive-component": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `escalation-rules/no-specific-user-reference`

Same as `approval-process/no-specific-user-reference`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: exempt usernames

**Example:**

```json
{
  "rules": {
    "escalation-rules/no-specific-user-reference": {
      "severity": "warn",
      "allowlist": [
        "integration@example.com"
      ]
    }
  }
}
```

## `escalation-rules/no-hardcoded-email-address`

Same as `workflow/no-hardcoded-email-address`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: exempt addresses
- `allowedDomains`: addresses in these domains are not reported

**Example:**

```json
{
  "rules": {
    "escalation-rules/no-hardcoded-email-address": {
      "severity": "warn",
      "allowlist": [
        "ops@example.com"
      ],
      "allowedDomains": [
        "example.com"
      ]
    }
  }
}
```

## `escalation-rules/boolean-filter-valid`

Same as `list-view/boolean-filter-valid`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "escalation-rules/boolean-filter-valid": "error"
  }
}
```

## `escalation-rules/one-active-rule-per-object`

Same as `assignment-rules/one-active-rule-per-object`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "escalation-rules/one-active-rule-per-object": "error"
  }
}
```

## `escalation-rules/no-unreachable-rule-entry`

Same as `assignment-rules/no-unreachable-rule-entry`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "escalation-rules/no-unreachable-rule-entry": "error"
  }
}
```

## `escalation-rules/max-rule-entries`

Same as `assignment-rules/max-rule-entries`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `max`: N, number of entries per rule. Required

**Example:**

```json
{
  "rules": {
    "escalation-rules/max-rule-entries": {
      "severity": "warn",
      "max": 50
    }
  }
}
```
