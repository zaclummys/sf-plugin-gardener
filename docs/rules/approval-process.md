# ApprovalProcess

[Back to catalog](README.md)

## `approval-process/description-required`

Same as `custom-object/description-required`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `minLength`: minimum description length in characters

**Example:**

```json
{
  "rules": {
    "approval-process/description-required": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "minLength": 20
    }
  }
}
```

## `approval-process/no-inactive-component`

Same as `flow/no-inactive-component`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "approval-process/no-inactive-component": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `approval-process/no-specific-user-reference`

Reports metadata that points to a specific user. This applies to approver, assignment rule owner and dashboard running user. Prefer a queue, role or hierarchy.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: exempt usernames

**Example:**

```json
{
  "rules": {
    "approval-process/no-specific-user-reference": {
      "severity": "warn",
      "allowlist": [
        "integration@example.com"
      ]
    }
  }
}
```

## `approval-process/boolean-filter-valid`

Same as `list-view/boolean-filter-valid`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "approval-process/boolean-filter-valid": "error"
  }
}
```

## `approval-process/entry-criteria-required`

A process without `entryCriteria` accepts any record of the object, for the same reason as `flow/entry-criteria-required`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "approval-process/entry-criteria-required": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `approval-process/step-description-required`

Each step must have a description, because the step is where the logic the reviewer needs to understand lives.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

It takes the same properties as `approval-process/description-required`.

**Example:**

```json
{
  "rules": {
    "approval-process/step-description-required": "error"
  }
}
```

## `approval-process/record-editability-strict`

Allowing the approver to edit the pending record requires an allowlist, because the edit invalidates what was already approved.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "approval-process/record-editability-strict": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `approval-process/max-approval-steps`

Approval process with more than N steps.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `max`: N, number of steps. Required

**Example:**

```json
{
  "rules": {
    "approval-process/max-approval-steps": {
      "severity": "warn",
      "max": 8
    }
  }
}
```
