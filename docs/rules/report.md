# Report

[Back to catalog](README.md)

Applies `description-required`. Applies `no-hardcoded-id` to filter values.

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
