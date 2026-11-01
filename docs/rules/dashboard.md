# Dashboard

[Back to catalog](README.md)

## `dashboard/no-specific-user-reference`

Same as `approval-process/no-specific-user-reference`. Applies to `runningUser`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: exempt usernames

**Example:**

```json
{
  "rules": {
    "dashboard/no-specific-user-reference": {
      "severity": "warn",
      "allowlist": [
        "integration@example.com"
      ]
    }
  }
}
```

## `dashboard/description-required`

Same as `custom-object/description-required`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `minLength`: minimum description length in characters

**Example:**

```json
{
  "rules": {
    "dashboard/description-required": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "minLength": 20
    }
  }
}
```

## `dashboard/logged-in-user-preferred`

`dashboardType` equal to `SpecifiedUser` requires an allowlist. Each user should see what they can see.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "dashboard/logged-in-user-preferred": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```
