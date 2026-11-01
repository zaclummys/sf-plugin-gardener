# CustomNotificationType

[Back to catalog](README.md)

## `custom-notification-type/description-required`

Same as `custom-object/description-required`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `minLength`: minimum description length in characters

**Example:**

```json
{
  "rules": {
    "custom-notification-type/description-required": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "minLength": 20
    }
  }
}
```

## `custom-notification-type/channel-required`

Reports a type with desktop and mobile turned off, because it delivers on no channel.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-notification-type/channel-required": "error"
  }
}
```
