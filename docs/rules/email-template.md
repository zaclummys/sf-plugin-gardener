# EmailTemplate

[Back to catalog](README.md)

## `email-template/no-inactive-component`

Same as `flow/no-inactive-component`. Applies to the `available` element.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "email-template/no-inactive-component": {
      "severity": "warn"
    }
  }
}
```

## `email-template/description-required`

Same as `custom-object/description-required`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `minLength`: minimum description length in characters

**Example:**

```json
{
  "rules": {
    "email-template/description-required": {
      "severity": "error",
      "minLength": 20
    }
  }
}
```

## `email-template/prefer-lightning-email-template`

Reports a new template with `uiType` equal to `Aloha`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "email-template/prefer-lightning-email-template": {
      "severity": "warn"
    }
  }
}
```

## `email-template/utf8-encoding-required`

An `encodingKey` other than UTF-8 is reported, because exotic encoding silently breaks accented characters.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "email-template/utf8-encoding-required": {
      "severity": "error"
    }
  }
}
```
