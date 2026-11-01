# DuplicateRule

[Back to catalog](README.md)

## `duplicate-rule/error-message-quality`

Same as `validation-rule/error-message-quality`. Applies to the alert text of an alert operation.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `minLength`: minimum message length in characters
- `genericMessages`: forbidden generic texts

**Example:**

```json
{
  "rules": {
    "duplicate-rule/error-message-quality": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "minLength": 30,
      "genericMessages": [
        "Invalid value",
        "Error"
      ]
    }
  }
}
```

## `duplicate-rule/description-required`

Same as `custom-object/description-required`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `minLength`: minimum description length in characters

**Example:**

```json
{
  "rules": {
    "duplicate-rule/description-required": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "minLength": 20
    }
  }
}
```

## `duplicate-rule/no-inactive-component`

Same as `flow/no-inactive-component`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "duplicate-rule/no-inactive-component": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `duplicate-rule/boolean-filter-valid`

Same as `list-view/boolean-filter-valid`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "duplicate-rule/boolean-filter-valid": "error"
  }
}
```

## `duplicate-rule/no-bypass-sharing-in-duplicate-rule`

`securityOption` equal to `BypassSharingRules` shows data from records the user cannot see and requires an allowlist. It is the analog of the flow system mode.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "duplicate-rule/no-bypass-sharing-in-duplicate-rule": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `duplicate-rule/no-silent-duplicate-rule`

Reports an `Allow` action without an alert and without a report, because the rule exists and does nothing.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "duplicate-rule/no-silent-duplicate-rule": "warn"
  }
}
```
