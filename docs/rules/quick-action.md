# QuickAction

[Back to catalog](README.md)

## `quick-action/description-required`

Same as `custom-object/description-required`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `minLength`: minimum description length in characters

**Example:**

```json
{
  "rules": {
    "quick-action/description-required": {
      "severity": "error",
      "minLength": 20
    }
  }
}
```

## `quick-action/no-hardcoded-id`

Same as `flow/no-hardcoded-id`. Applies to the `fieldOverrides` formulas.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `exemptElements`: names of XML elements added to the built-in list of exemptions

**Example:**

```json
{
  "rules": {
    "quick-action/no-hardcoded-id": {
      "severity": "error",
      "exemptElements": [
        "requestSigningCertId"
      ]
    }
  }
}
```

## `quick-action/success-message-recommended`

Reports a create or update action without `successMessage`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "quick-action/success-message-recommended": {
      "severity": "warn"
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
