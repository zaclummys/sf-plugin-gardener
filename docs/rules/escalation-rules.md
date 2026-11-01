# EscalationRules

[Back to catalog](README.md)

Applies the same cross-cutting rules as [AssignmentRules](assignment-rules.md). The type has no description element either.

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
