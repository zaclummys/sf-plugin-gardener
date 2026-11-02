# Project structure rules

[Back to catalog](README.md)

These rules look at the project as a whole instead of a specific type.

## `project/no-hardcoded-url`

Same as `custom-tab/no-hardcoded-url`. Applies to the `sfdcLoginUrl` of `sfdx-project.json`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `forbiddenHostPatterns`: forbidden host patterns, with `*.my.salesforce.com` included by default

**Example:**

```json
{
  "rules": {
    "project/no-hardcoded-url": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "forbiddenHostPatterns": [
        "*.my.salesforce.com"
      ]
    }
  }
}
```

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

A deploy with more than N files. The linter counts the metadata files that it analyzes in the package directories of the project.

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

## `project/api-version-consistency`

All `*-meta.xml` files must declare the same apiVersion, aligned with the `sourceApiVersion` of `sfdx-project.json`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `expectedVersion`: required version, with `sourceApiVersion` as the default value

**Example:**

```json
{
  "rules": {
    "project/api-version-consistency": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "expectedVersion": "60.0"
    }
  }
}
```

## `project/min-api-version`

Reports apiVersion below the configured minimum.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `minVersion`: minimum accepted version

**Example:**

```json
{
  "rules": {
    "project/min-api-version": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "minVersion": "60.0"
    }
  }
}
```

## `project/max-api-version`

An apiVersion above the configured maximum fails at deploy, because the file version cannot be higher than that of the target org. Agents copy versions from newer projects. Complements `project/min-api-version`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `maxVersion`: maximum accepted version, required because the linter does not query the org

**Reference:** [Salesforce documentation](https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_intro.htm)

**Example:**

```json
{
  "rules": {
    "project/max-api-version": {
      "severity": "error",
      "maxVersion": "62.0"
    }
  }
}
```

## `project/description-max-length`

Description above the character limit of its type, a limit the platform enforces at deploy. Complements the `description-required` rule of each type, which requires the minimum length.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `limits`: map from metadata type to the maximum number, in number of characters

**Reference:** [Salesforce documentation](https://developer.salesforce.com/docs/platform/salesforce-app-limits-cheatsheet/guide/salesforce-app-limits-platform-metadata.html)

**Example:**

```json
{
  "rules": {
    "project/description-max-length": {
      "severity": "error",
      "limits": {
        "CustomObject": 1000,
        "CustomField": 1000
      }
    }
  }
}
```

## `project/max-api-name-length`

API name above the character limit of its type, a limit the platform enforces at deploy.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `limits`: map from metadata type to the maximum number, in number of characters

**Reference:** [Salesforce documentation](https://developer.salesforce.com/docs/platform/salesforce-app-limits-cheatsheet/guide/salesforce-app-limits-platform-metadata.html)

**Example:**

```json
{
  "rules": {
    "project/max-api-name-length": {
      "severity": "error",
      "limits": {
        "CustomObject": 40,
        "CustomField": 40
      }
    }
  }
}
```

## `project/max-file-lines`

Metadata file above the line limit of its type. A small file fits in the AI context window and reduces merge conflicts between concurrent sessions. A profile with thousands of lines indicates a full retrieve, and the giant diff hides real changes.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `limits`: map from metadata type to the maximum number, in number of lines
- `allowlist`: exempt files, such as a legacy profile not yet split

**Example:**

```json
{
  "rules": {
    "project/max-file-lines": {
      "severity": "warn",
      "limits": {
        "Profile": 5000,
        "Flow": 1500
      },
      "allowlist": [
        "force-app/main/default/profiles/Admin.profile-meta.xml"
      ]
    }
  }
}
```
