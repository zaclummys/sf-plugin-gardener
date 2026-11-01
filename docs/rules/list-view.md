# ListView

[Back to catalog](README.md)

Applies `no-hardcoded-id` to filter values. Applies `boolean-filter-valid` to the `booleanFilter` and `filters` pair.

## `list-view/no-everything-visible-listview`

A list view shared with all users requires an allowlist in the configuration. The implementation must enumerate all `sharedTo` targets, including portal and territory.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "list-view/no-everything-visible-listview": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `list-view/no-unfiltered-everything-scope`

Reports `filterScope` equal to `Everything` with no filter, because it creates a whole-table list view.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "list-view/no-unfiltered-everything-scope": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```
