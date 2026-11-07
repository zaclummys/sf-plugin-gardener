# ListView

[Back to catalog](README.md)

## `list-view/no-hardcoded-id`

Same as `flow/no-hardcoded-id`. Applies to filter values.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `exemptElements`: names of XML elements added to the built-in list of exemptions

**Example:**

```json
{
  "rules": {
    "list-view/no-hardcoded-id": {
      "severity": "error",
      "exemptElements": [
        "requestSigningCertId"
      ]
    }
  }
}
```

## `list-view/boolean-filter-valid`

The `booleanFilter` must reference all the declared `criteriaItems` indexes and only them. It is a typical agent mistake when adding or removing a criterion.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

The filter below declares three criteria and the `booleanFilter` references only two.

```xml
<filters>
  <field>Status</field>
  <operation>equals</operation>
  <value>Open</value>
</filters>
<filters>
  <field>Priority</field>
  <operation>equals</operation>
  <value>High</value>
</filters>
<filters>
  <field>Type</field>
  <operation>equals</operation>
  <value>Bug</value>
</filters>
<booleanFilter>1 AND 2</booleanFilter>
```

The fix is to reference index 3.

```xml
<booleanFilter>1 AND 2 AND 3</booleanFilter>
```

Configuration:

```json
{
  "rules": {
    "list-view/boolean-filter-valid": "error"
  }
}
```

## `list-view/no-everything-visible-listview`

A list view shared with all users is reported. The implementation must enumerate all `sharedTo` targets, including portal and territory.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "list-view/no-everything-visible-listview": {
      "severity": "error"
    }
  }
}
```

## `list-view/no-unfiltered-everything-scope`

Reports `filterScope` equal to `Everything` with no filter, because it creates a whole-table list view.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "list-view/no-unfiltered-everything-scope": {
      "severity": "warn"
    }
  }
}
```
