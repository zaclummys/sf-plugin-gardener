# MatchingRule

[Back to catalog](README.md)

## `matching-rule/description-required`

Same as `custom-object/description-required`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `minLength`: minimum description length in characters

**Example:**

```json
{
  "rules": {
    "matching-rule/description-required": {
      "severity": "error",
      "minLength": 20
    }
  }
}
```

## `matching-rule/no-inactive-component`

Same as `flow/no-inactive-component`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "matching-rule/no-inactive-component": {
      "severity": "warn"
    }
  }
}
```

## `matching-rule/boolean-filter-valid`

Same as `list-view/boolean-filter-valid`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "matching-rule/boolean-filter-valid": "error"
  }
}
```

## `matching-rule/no-match-blanks`

`blankValueBehavior` equal to `MatchBlanks` makes two records with the empty field count as duplicates and is reported.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "matching-rule/no-match-blanks": {
      "severity": "error"
    }
  }
}
```
