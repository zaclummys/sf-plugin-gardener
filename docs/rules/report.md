# Report

[Back to catalog](README.md)

## `report/description-required`

Same as `custom-object/description-required`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `minLength`: minimum description length in characters

**Example:**

```json
{
  "rules": {
    "report/description-required": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "minLength": 20
    }
  }
}
```

## `report/no-hardcoded-id`

Same as `flow/no-hardcoded-id`. Applies to filter values.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `exemptElements`: names of XML elements added to the built-in list of exemptions

**Example:**

```json
{
  "rules": {
    "report/no-hardcoded-id": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "exemptElements": [
        "requestSigningCertId"
      ]
    }
  }
}
```

## `report/needs-constraint`

Reports a report with no filter, no restrictive scope and an open time range, because it scans the entire org.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "report/needs-constraint": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `report/max-report-columns`

A report with more than N columns.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `max`: N, number of columns. Required

**Example:**

```json
{
  "rules": {
    "report/max-report-columns": {
      "severity": "warn",
      "max": 20
    }
  }
}
```
