# Group

[Back to catalog](README.md)

## `group/org-chart-explicit`

The group must declare `doNotUseOrgChart`. The element decides whether access extends up the hierarchy, and leaving it out makes the choice implicit.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "group/org-chart-explicit": {
      "severity": "warn"
    }
  }
}
```
