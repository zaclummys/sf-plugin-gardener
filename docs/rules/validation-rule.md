# ValidationRule

[Back to catalog](README.md)

Applies `description-required` and `no-inactive-component` via the `active` element.

## `validation-rule/bypass-required`

Every validation rule must check a bypass custom permission. This allows data loads and integrations without deactivating the rule.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `bypassPermissions`: custom permissions accepted as bypass, or any when empty

**Example:**

```json
{
  "rules": {
    "validation-rule/bypass-required": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "bypassPermissions": [
        "Bypass_Validation"
      ]
    }
  }
}
```

## `validation-rule/error-message-quality`

The error message must have a minimum length and cannot be a generic text. The message needs to tell the user how to fix it.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `minLength`: minimum message length in characters
- `genericMessages`: forbidden generic texts

**Example:**

```json
{
  "rules": {
    "validation-rule/error-message-quality": {
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

## `validation-rule/error-message-max-length`

An error message with more than N characters, a limit the platform enforces at deploy. Complements `validation-rule/error-message-quality`, which requires the minimum length.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `max`: N, number of characters in the message. Required

**Reference:** [Salesforce documentation](https://developer.salesforce.com/docs/platform/salesforce-app-limits-cheatsheet/guide/salesforce-app-limits-platform-metadata.html)

**Example:**

```json
{
  "rules": {
    "validation-rule/error-message-max-length": {
      "severity": "error",
      "max": 255
    }
  }
}
```
## `validation-rule/error-display-field-exists`

`errorDisplayField` must reference an existing field on the object. The rule stays deployable with an invalid field and the error would only show up at runtime.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "validation-rule/error-display-field-exists": "error"
  }
}
```

## `validation-rule/max-validation-rules-per-object`

An object with more than N active validation rules, and the platform enforces a ceiling per object.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `max`: N, number of active validation rules. Required

**Reference:** [Salesforce documentation](https://developer.salesforce.com/docs/platform/salesforce-app-limits-cheatsheet/guide/salesforce-app-limits-platform-metadata.html)

**Example:**

```json
{
  "rules": {
    "validation-rule/max-validation-rules-per-object": {
      "severity": "error",
      "max": 100
    }
  }
}
```
