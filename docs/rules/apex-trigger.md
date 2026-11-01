# ApexTrigger

[Back to catalog](README.md)

The scope is the `-meta.xml`. See [Scope and offline analysis](/concepts/#scope-and-offline-analysis).

Applies `api-version-consistency` and `min-api-version`.

## `apex-trigger/status-active`

Reports `status` other than `Active`. An inactive trigger is dead automation and the value `Inactive` is not even accepted for a class.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "apex-trigger/status-active": "error"
  }
}
```
