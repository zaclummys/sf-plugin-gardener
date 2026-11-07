# ReportType

[Back to catalog](README.md)

## `report-type/description-required`

Same as `custom-object/description-required`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `minLength`: minimum description length in characters

**Example:**

```json
{
  "rules": {
    "report-type/description-required": {
      "severity": "error",
      "minLength": 20
    }
  }
}
```

## `report-type/deployed`

Reports a report type with `deployed` false that is versioned, because it is metadata that stays in development forever.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "report-type/deployed": {
      "severity": "warn"
    }
  }
}
```
