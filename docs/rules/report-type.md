# ReportType

[Back to catalog](README.md)

Applies `description-required`.

## `report-type/deployed`

Reports a report type with `deployed` false that is versioned, because it is metadata that stays in development forever.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "report-type/deployed": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```
