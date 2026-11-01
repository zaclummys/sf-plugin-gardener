# ApprovalProcess

[Back to catalog](README.md)

Applies `description-required`, `no-specific-user-reference`, `no-inactive-component` and `boolean-filter-valid`.

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

Applies `description-required` to each step, because the step is where the logic the reviewer needs to understand lives.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

The configuration of `description-required` still applies.

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
