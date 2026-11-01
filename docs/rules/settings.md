# Settings

[Back to catalog](README.md)

`*.settings-meta.xml` files have whole-org scope, so deploying them overwrites global configuration.

## `settings/type-allowlist`

Only the settings types listed in the configuration may be in the repository. An agent that does a broad retrieve and commits `Security.settings` by accident is an incident waiting for a deploy.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowedSettings`: settings types allowed in the repository

**Example:**

```json
{
  "rules": {
    "settings/type-allowlist": {
      "severity": "error",
      "allowedSettings": [
        "Case",
        "Knowledge"
      ]
    }
  }
}
```

## `settings/security-baseline`

Password and session policies must respect the configured limits, because the versioned file cannot lock in a weakening. Each element has a minimum or a maximum, depending on what weakens the policy.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `baseline`: map from policy element to an object with `min` or `max`

**Example:**

```json
{
  "rules": {
    "settings/security-baseline": {
      "severity": "error",
      "baseline": {
        "minimumPasswordLength": {
          "min": 10
        },
        "sessionTimeoutMinutes": {
          "max": 120
        }
      }
    }
  }
}
```

## `settings/no-admin-login-as-any-user`

`enableAdminLoginAsAnyUser` true requires an allowlist.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "settings/no-admin-login-as-any-user": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `settings/no-org-specific-address`

Reports email-to-case addresses outside the configured domain, because an environment address breaks sandbox and production in different ways.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowedDomains`: [accepted email domains](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "settings/no-org-specific-address": {
      "severity": "warn",
      "allowedDomains": [
        "example.com"
      ]
    }
  }
}
```

## `settings/case-default-owner-queue`

Reports a case default owner of type user, applying `no-specific-user-reference` to the assignment fallback.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "settings/case-default-owner-queue": {
      "severity": "warn",
      "allowlist": [
        "Case"
      ]
    }
  }
}
```

## `settings/knowledge-public-sharing-allowlist`

Publishing articles to sites or communities requires an allowlist, because making an article public is an editorial decision, not a side effect of a deploy.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "settings/knowledge-public-sharing-allowlist": {
      "severity": "error",
      "allowlist": [
        "Knowledge"
      ]
    }
  }
}
```
