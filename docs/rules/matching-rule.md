# MatchingRule

[Back to catalog](README.md)

Applies `description-required`, `no-inactive-component` and `boolean-filter-valid`.

## `matching-rule/no-match-blanks`

`blankValueBehavior` equal to `MatchBlanks` makes two records with the empty field count as duplicates and requires an allowlist.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "matching-rule/no-match-blanks": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```
