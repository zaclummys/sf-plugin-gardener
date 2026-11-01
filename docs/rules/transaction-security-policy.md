# TransactionSecurityPolicy

[Back to catalog](README.md)

Applies `no-inactive-component` and `no-specific-user-reference`.

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
