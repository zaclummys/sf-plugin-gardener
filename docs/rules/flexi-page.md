# FlexiPage

[Back to catalog](README.md)

Applies `description-required`. Applies `no-hardcoded-id` to the `visibilityRule` values.

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
