# Project structure rules

[Back to catalog](README.md)

These rules look at the project as a whole instead of a specific type.

## `project/no-duplicate-metadata`

The same component cannot be defined in two files of the project.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "project/no-duplicate-metadata": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `project/forbidden-metadata-types`

Configurable list of types forbidden in the repository, such as territories or site.com.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `forbiddenTypes`: forbidden metadata types

**Example:**

```json
{
  "rules": {
    "project/forbidden-metadata-types": {
      "severity": "error",
      "forbiddenTypes": [
        "Territory2",
        "SiteDotCom"
      ]
    }
  }
}
```

## `project/source-format-required`

The metadata must be in source format, not in metadata format with monolithic files.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "project/source-format-required": "error"
  }
}
```

## `project/decomposed-metadata-required`

Types that support decomposition, such as objects and permission sets in recent CLI versions, must be decomposed. Smaller files fit better in the AI context window and reduce merge conflicts between concurrent sessions.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `types`: types that require decomposition

**Example:**

```json
{
  "rules": {
    "project/decomposed-metadata-required": {
      "severity": "error",
      "types": [
        "CustomObject",
        "PermissionSet"
      ]
    }
  }
}
```

## `project/no-org-specific-login-url`

Applies `no-hardcoded-url` to the `sfdcLoginUrl` of `sfdx-project.json`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

The configuration of `no-hardcoded-url` still applies.

**Example:**

```json
{
  "rules": {
    "project/no-org-specific-login-url": "error"
  }
}
```

## `project/forceignore-forward-slash-only`

Reports a pattern with a backslash in `.forceignore`, because it never matches.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "project/forceignore-forward-slash-only": "error"
  }
}
```

## `project/forceignore-dead-pattern`

Reports a pattern that matches no file, because it is noise that ages badly.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: exempt patterns

**Example:**

```json
{
  "rules": {
    "project/forceignore-dead-pattern": {
      "severity": "warn",
      "allowlist": [
        "**/legado/**"
      ]
    }
  }
}
```

## `project/forceignore-no-broad-metadata-ignore`

Ignoring an entire metadata directory requires an allowlist, because it hides drift between repository and org.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: directories authorized to be ignored

**Example:**

```json
{
  "rules": {
    "project/forceignore-no-broad-metadata-ignore": {
      "severity": "error",
      "allowlist": [
        "force-app/main/default/territories"
      ]
    }
  }
}
```

## `project/max-files`

A deploy with more than N files. The linter counts the files under the project directory.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `max`: N, number of files per deploy. Required

**Reference:** [Salesforce documentation](https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm)

**Example:**

```json
{
  "rules": {
    "project/max-files": {
      "severity": "error",
      "max": 10000
    }
  }
}
```

## `project/max-size`

A deploy whose zip exceeds N megabytes. The linter estimates the compressed size from the files, so the result is approximate.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `max`: N, zip size in megabytes. Required

**Reference:** [Salesforce documentation](https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm)

**Example:**

```json
{
  "rules": {
    "project/max-size": {
      "severity": "error",
      "max": 39
    }
  }
}
```
