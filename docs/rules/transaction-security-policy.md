# TransactionSecurityPolicy

[Back to catalog](README.md)

## `transaction-security-policy/no-inactive-component`

Same as `flow/no-inactive-component`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "transaction-security-policy/no-inactive-component": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `transaction-security-policy/no-specific-user-reference`

Same as `approval-process/no-specific-user-reference`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: exempt usernames

**Example:**

```json
{
  "rules": {
    "transaction-security-policy/no-specific-user-reference": {
      "severity": "warn",
      "allowlist": [
        "integration@example.com"
      ]
    }
  }
}
```

## `transaction-security-policy/action-not-empty`

Reports a policy with no block, no MFA and no notification, because it monitors and does nothing.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "transaction-security-policy/action-not-empty": "error"
  }
}
```

## `transaction-security-policy/no-legacy-fields`

Reports elements of the legacy Transaction Security model, such as `eventType` and `executionUser`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "transaction-security-policy/no-legacy-fields": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```
