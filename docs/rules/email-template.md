# EmailTemplate

[Back to catalog](README.md)

Applies `description-required`.

## `email-template/no-unavailable-template`

Reports a versioned template with `available` false, via `no-inactive-component`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "email-template/no-unavailable-template": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `email-template/prefer-lightning-email-template`

Reports a new template with `uiType` equal to `Aloha`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "email-template/prefer-lightning-email-template": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `email-template/utf8-encoding-required`

An `encodingKey` other than UTF-8 requires an allowlist, because exotic encoding silently breaks accented characters.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "email-template/utf8-encoding-required": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```
