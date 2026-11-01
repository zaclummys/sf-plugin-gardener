# PermissionSetGroup

[Back to catalog](README.md)

Applies the same cross-cutting rules as [PermissionSet](permission-set.md).

## `permission-set-group/max-permission-sets-per-group`

A permission set group with more than N permission sets.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `max`: N, number of permission sets per group. Required

**Example:**

```json
{
  "rules": {
    "permission-set-group/max-permission-sets-per-group": {
      "severity": "warn",
      "max": 15
    }
  }
}
```
