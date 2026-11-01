# FlexiPage

[Back to catalog](README.md)

## `flexi-page/description-required`

Same as `custom-object/description-required`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `minLength`: minimum description length in characters

**Example:**

```json
{
  "rules": {
    "flexi-page/description-required": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "minLength": 20
    }
  }
}
```

## `flexi-page/no-hardcoded-id`

Same as `flow/no-hardcoded-id`. Applies to the `visibilityRule` values.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `exemptElements`: names of XML elements added to the built-in list of exemptions

**Example:**

```json
{
  "rules": {
    "flexi-page/no-hardcoded-id": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "exemptElements": [
        "requestSigningCertId"
      ]
    }
  }
}
```

## `flexi-page/max-components-per-region`

A region with more than N components hurts performance.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `max`: N, number of components per region. Required
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "flexi-page/max-components-per-region": {
      "severity": "warn",
      "max": 10,
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```
## `flexi-page/prefer-dynamic-forms`

Reports a record page using the `flexipage:recordDetail` component. Dynamic Forms breaks the layout into individual fields and produces a more readable diff.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "flexi-page/prefer-dynamic-forms": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `flexi-page/max-visibility-criteria`

A `visibilityRule` with more than N criteria or complex composite logic becomes unreadable in review.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `max`: N, number of criteria per rule. Required
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "flexi-page/max-visibility-criteria": {
      "severity": "warn",
      "max": 5,
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```
## `flexi-page/field-behavior-conflict`

The same `fieldItem` cannot appear twice on the page with a divergent `uiBehavior`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "flexi-page/field-behavior-conflict": "error"
  }
}
```
