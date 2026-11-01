# QuickAction

[Back to catalog](README.md)

Applies `description-required`. Applies `no-hardcoded-id` to the `fieldOverrides` formulas.

## `quick-action/success-message-recommended`

Reports a create or update action without `successMessage`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "quick-action/success-message-recommended": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `quick-action/layout-not-empty`

Reports an action layout with no field, because it versions an unusable action.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "quick-action/layout-not-empty": "warn"
  }
}
```

## `quick-action/no-required-readonly-conflict-in-action`

A required field of the object with `uiBehavior` equal to `Readonly` prevents a create action from completing.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "quick-action/no-required-readonly-conflict-in-action": "error"
  }
}
```
