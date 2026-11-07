# LightningMessageChannel

[Back to catalog](README.md)

## `lightning-message-channel/description-required`

Same as `custom-object/description-required`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `minLength`: minimum description length in characters

**Example:**

```json
{
  "rules": {
    "lightning-message-channel/description-required": {
      "severity": "error",
      "minLength": 20
    }
  }
}
```

## `lightning-message-channel/naming-convention`

Same as `custom-object/naming-convention`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `patterns`: map from metadata type to a regular expression for the name
- `forbiddenSuffixes`: list of forbidden suffixes
- `forbiddenPrefixes`: list of forbidden prefixes

**Example:**

```json
{
  "rules": {
    "lightning-message-channel/naming-convention": {
      "severity": "error",
      "patterns": {
        "CustomField": "^[A-Z][A-Za-z0-9]*__c$"
      },
      "forbiddenSuffixes": [
        "_v2",
        "_old",
        "_del",
        "_final"
      ],
      "forbiddenPrefixes": [
        "Copy_of"
      ]
    }
  }
}
```

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

`isExposed` true is reported, because exposure is irreversible in a package.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "lightning-message-channel/exposure-justified": {
      "severity": "error"
    }
  }
}
```
