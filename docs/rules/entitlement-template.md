# EntitlementTemplate

[Back to catalog](README.md)

Applies the same cross-cutting rules as [EntitlementProcess](entitlement-process.md).

## `entitlement-template/per-incident-cases`

Reports a per-incident template without `casesPerEntitlement`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "entitlement-template/per-incident-cases": "warn"
  }
}
```
