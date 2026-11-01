# Network

[Back to catalog](README.md)

## `network/no-guest-chatter`

Chatter for the guest user requires an allowlist.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "network/no-guest-chatter": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `network/no-guest-file-access`

Guest access to files requires an allowlist.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "network/no-guest-file-access": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `network/no-guest-member-visibility`

Reports a guest user with visibility of the site members, because enumerating users for an anonymous visitor has no common use case.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "network/no-guest-member-visibility": "error"
  }
}
```

## `network/self-registration-profile-explicit`

Enabled self-registration requires a declared `selfRegProfile`, because the implicit org default may be permissive.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "network/self-registration-profile-explicit": "error"
  }
}
```
