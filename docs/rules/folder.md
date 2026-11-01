# Folders

[Back to catalog](README.md)

Covers ReportFolder, DashboardFolder and EmailFolder, which share the same sharing elements. Applies `no-specific-user-reference` to the users in `folderShares` and `naming-convention` to folder names.

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
