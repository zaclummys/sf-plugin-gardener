# StandardValueSet

[Back to catalog](README.md)

Applies `custom-field/single-default-picklist-value` to the values.

## `standard-value-set/allowlist`

Versioning a StandardValueSet requires an allowlist, because it overrides the standard picklists of the whole org and usually gets in through an accidental retrieve.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: allowed StandardValueSet names

**Example:**

```json
{
  "rules": {
    "standard-value-set/allowlist": {
      "severity": "error",
      "allowlist": [
        "LeadSource"
      ]
    }
  }
}
```

## `standard-value-set/opportunity-stage-metadata-complete`

In stage and status value sets, each value must fill in the semantic fields of the context, such as `probability` and `forecastCategory`. Omission produces a silent default behavior.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `requiredFields`: map from value set to the elements required in each value

**Example:**

```json
{
  "rules": {
    "standard-value-set/opportunity-stage-metadata-complete": {
      "severity": "error",
      "requiredFields": {
        "OpportunityStage": [
          "probability",
          "forecastCategory"
        ]
      }
    }
  }
}
```
