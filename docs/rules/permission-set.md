# PermissionSet

[Back to catalog](README.md)

## `permission-set/description-required`

Same as `custom-object/description-required`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `minLength`: minimum description length in characters

**Example:**

```json
{
  "rules": {
    "permission-set/description-required": {
      "severity": "error",
      "minLength": 20
    }
  }
}
```

## `permission-set/naming-convention`

Same as `custom-object/naming-convention`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `patterns`: map from metadata type to a regular expression for the name
- `forbiddenSuffixes`: list of forbidden suffixes
- `forbiddenPrefixes`: list of forbidden prefixes

**Example:**

```json
{
  "rules": {
    "permission-set/naming-convention": {
      "severity": "error",
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

## `permission-set/no-dangerous-permission`

Permissions such as Modify All Data, View All Data and Author Apex are reported.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `dangerousPermissions`: permissions subject to the rule, with the three mentioned as the default

**Example:**

```json
{
  "rules": {
    "permission-set/no-dangerous-permission": {
      "severity": "error",
      "dangerousPermissions": [
        "ModifyAllData",
        "ViewAllData",
        "AuthorApex"
      ]
    }
  }
}
```

## `permission-set/no-empty-permission-set`

Reports a permission set with no permission.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "permission-set/no-empty-permission-set": {
      "severity": "warn"
    }
  }
}
```

## `permission-set/max-permissions-per-permission-set`

A permission set with more than N declared permissions. The set should be split by function.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `max`: N, number of permissions. Required

**Example:**

```json
{
  "rules": {
    "permission-set/max-permissions-per-permission-set": {
      "severity": "warn",
      "max": 300
    }
  }
}
```
