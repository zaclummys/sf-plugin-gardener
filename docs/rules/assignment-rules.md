# AssignmentRules

[Back to catalog](README.md)

These types have no description element in the XML, so `description-required` does not apply here.

Applies `no-specific-user-reference`, `no-inactive-component`, `boolean-filter-valid` and `no-hardcoded-email-address`.

## `assignment-rules/one-active-rule-per-object`

More than one active rule in the same file fails at deploy. Catching this at lint saves an entire agent cycle.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "assignment-rules/one-active-rule-per-object": "error"
  }
}
```

## `assignment-rules/no-unreachable-rule-entry`

An entry without criteria is a catch-all and every entry after it never runs. The order of the entries in the XML is the evaluation order at runtime.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "assignment-rules/no-unreachable-rule-entry": "error"
  }
}
```

## `assignment-rules/max-rule-entries`

An assignment rule with more than N entries.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `max`: N, number of entries per rule. Required

**Example:**

```json
{
  "rules": {
    "assignment-rules/max-rule-entries": {
      "severity": "warn",
      "max": 50
    }
  }
}
```
