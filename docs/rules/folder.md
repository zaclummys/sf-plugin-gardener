# Folders

[Back to catalog](README.md)

Covers ReportFolder, DashboardFolder and EmailFolder, which share the same sharing elements.

## `folder/naming-convention`

Same as `custom-object/naming-convention`. Applies to folder names.

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
    "folder/naming-convention": {
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

## `folder/no-specific-user-reference`

Same as `approval-process/no-specific-user-reference`. Applies to the users in `folderShares`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: exempt usernames

**Example:**

```json
{
  "rules": {
    "folder/no-specific-user-reference": {
      "severity": "warn",
      "allowlist": [
        "integration@example.com"
      ]
    }
  }
}
```

## `folder/no-public-access`

A folder with `accessType` equal to `Public` or `PublicInternal` requires an allowlist, because every user with access to reports, dashboards or templates can read the content.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "folder/no-public-access": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `folder/no-share-with-all-users`

Sharing a folder with the whole organization or with all partner or portal users requires an allowlist.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "folder/no-share-with-all-users": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```
