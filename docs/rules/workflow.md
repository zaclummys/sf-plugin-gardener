# Workflow

[Back to catalog](README.md)

Applies `no-inactive-component`, `boolean-filter-valid`, `no-hardcoded-email-address` and `no-specific-user-reference`.

## `workflow/no-workflow-rule`

Forbids an active workflow rule. The technology is legacy and the automation should live in a flow.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "workflow/no-workflow-rule": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `workflow/no-outbound-message`

Reports an outbound message. Prefer a platform event or a callout in a flow.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "workflow/no-outbound-message": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `workflow/no-session-id-in-outbound-message`

`includeSessionId` true sends a valid session to an external endpoint and requires an allowlist.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "workflow/no-session-id-in-outbound-message": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `workflow/no-unused-workflow-action`

An alert, field update, task or outbound message that no rule or approval process references is dead metadata. Orphan actions are left over when someone deletes the rule and forgets the rest.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "workflow/no-unused-workflow-action": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```
