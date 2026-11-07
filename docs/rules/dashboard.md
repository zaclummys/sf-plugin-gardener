# Dashboard

[Back to catalog](README.md)

## `dashboard/no-specific-user-reference`

Same as `approval-process/no-specific-user-reference`. Applies to `runningUser`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "dashboard/no-specific-user-reference": {
      "severity": "warn"
    }
  }
}
```

## `dashboard/description-required`

Same as `custom-object/description-required`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `minLength`: minimum description length in characters

**Example:**

```json
{
  "rules": {
    "dashboard/description-required": {
      "severity": "error",
      "minLength": 20
    }
  }
}
```

## `dashboard/logged-in-user-preferred`

`dashboardType` equal to `SpecifiedUser` is reported. Each user should see what they can see.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "dashboard/logged-in-user-preferred": {
      "severity": "error"
    }
  }
}
```
