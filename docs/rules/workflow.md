# Workflow

[Back to catalog](README.md)

## `workflow/no-inactive-component`

Same as `flow/no-inactive-component`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "workflow/no-inactive-component": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `workflow/no-specific-user-reference`

Same as `approval-process/no-specific-user-reference`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: exempt usernames

**Example:**

```json
{
  "rules": {
    "workflow/no-specific-user-reference": {
      "severity": "warn",
      "allowlist": [
        "integration@example.com"
      ]
    }
  }
}
```

## `workflow/no-hardcoded-email-address`

Reports a person's email address in metadata, such as in an alert copy or an escalation notification. The same reasoning as `approval-process/no-specific-user-reference` applies.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: exempt addresses
- `allowedDomains`: addresses in these domains are not reported

**Example:**

```json
{
  "rules": {
    "workflow/no-hardcoded-email-address": {
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

## `workflow/boolean-filter-valid`

Same as `list-view/boolean-filter-valid`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "workflow/boolean-filter-valid": "error"
  }
}
```

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
