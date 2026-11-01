# PermissionSetGroup

[Back to catalog](README.md)

Applies the same cross-cutting rules as [PermissionSet](permission-set.md).

## `permission-set-group/description-required`

Same as `custom-object/description-required`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `minLength`: minimum description length in characters

**Example:**

```json
{
  "rules": {
    "permission-set-group/description-required": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "minLength": 20
    }
  }
}
```

## `permission-set-group/naming-convention`

Same as `custom-object/naming-convention`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `patterns`: map from metadata type to a regular expression for the name
- `forbiddenSuffixes`: list of forbidden suffixes
- `forbiddenPrefixes`: list of forbidden prefixes

**Example:**

```json
{
  "rules": {
    "permission-set-group/naming-convention": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "patterns": {
        "CustomField": "^[A-Z][A-Za-z0-9]*__c$"
      },
      "forbiddenSuffixes": [
        "_v2",
        "_old",
        "_del",
        "_final"
      ],
      "forbiddenPrefixes": [
        "Copy_of"
      ]
    }
  }
}
```

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
