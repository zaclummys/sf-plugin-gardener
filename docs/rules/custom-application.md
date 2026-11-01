# CustomApplication

[Back to catalog](README.md)

## `custom-application/description-required`

Same as `custom-object/description-required`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `minLength`: minimum description length in characters

**Example:**

```json
{
  "rules": {
    "custom-application/description-required": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "minLength": 20
    }
  }
}
```

## `custom-application/default-landing-tab-in-tabs`

`defaultLandingTab` must be in the `tabs` list, because a mismatch indicates a partial XML edit.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-application/default-landing-tab-in-tabs": "error"
  }
}
```

## `custom-application/no-new-classic-app`

A new app with `uiType` equal to `Aloha` is forbidden.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-application/no-new-classic-app": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `custom-application/utility-bar-single-app`

Reports the same utility bar referenced by more than one app.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-application/utility-bar-single-app": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `custom-application/profile-action-override-scoped`

Reports a duplicate override for the same combination of profile, record type and form factor, because the deploy result is undetermined.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-application/profile-action-override-scoped": "error"
  }
}
```
