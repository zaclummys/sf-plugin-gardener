# DataWeaveResource

[Back to catalog](README.md)

## `dataweave-resource/no-global`

Reports a DataWeave script with `isGlobal` true outside a package project, because it widens the API surface unnecessarily.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "dataweave-resource/no-global": {
      "severity": "warn"
    }
  }
}
```
