# LightningMessageChannel

[Back to catalog](README.md)

Applies `description-required` and `naming-convention`.

## `lightning-message-channel/fields-required`

Reports a channel without `lightningMessageFields`, because the fields are the only documentation of the payload.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "lightning-message-channel/fields-required": "warn"
  }
}
```

## `lightning-message-channel/field-description-required`

Each channel field needs a description, because the name alone does not explain the contract.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `minLength`: minimum description length in characters

**Example:**

```json
{
  "rules": {
    "lightning-message-channel/field-description-required": {
      "severity": "error",
      "minLength": 20
    }
  }
}
```

## `lightning-message-channel/exposure-justified`

`isExposed` true requires an allowlist, because exposure is irreversible in a package.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "lightning-message-channel/exposure-justified": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```
