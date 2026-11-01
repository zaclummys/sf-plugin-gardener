# CustomLabel

[Back to catalog](README.md)

## `custom-label/no-duplicate-label-value`

Two labels with the same text should become one.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-label/no-duplicate-label-value": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `custom-label/category-required`

Every label needs a filled-in category, for organization and search.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-label/category-required": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `custom-label/sorted-by-fullname`

The entries of the single labels file must be sorted by `fullName`. Deterministic ordering eliminates merge conflicts between concurrent sessions.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-label/sorted-by-fullname": "error"
  }
}
```

## `custom-label/language-matches-default`

The `language` element must be the configured default language. Translation goes in Translations, not in the base label.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `defaultLanguage`: default language code

**Example:**

```json
{
  "rules": {
    "custom-label/language-matches-default": {
      "severity": "error",
      "defaultLanguage": "pt_BR"
    }
  }
}
```

## `custom-label/protected-only-with-namespace`

Reports `protected` true without a `namespace` in the project, because outside a package the protection does nothing.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-label/protected-only-with-namespace": "warn"
  }
}
```

## `custom-label/max-labels-per-file`

The single labels file with more than N entries.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `max`: N, number of labels. Required

**Example:**

```json
{
  "rules": {
    "custom-label/max-labels-per-file": {
      "severity": "warn",
      "max": 2000
    }
  }
}
```
