# Audience

[Back to catalog](README.md)

## `audience/criteria-required`

Reports an audience with no criteria and no formula, because it matches any visitor.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "audience/criteria-required": {
      "severity": "warn"
    }
  }
}
```
