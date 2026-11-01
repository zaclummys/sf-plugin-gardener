# CustomSite

[Back to catalog](README.md)

## `custom-site/no-inactive-component`

Same as `flow/no-inactive-component`. Applies to the `active` element.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-site/no-inactive-component": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `custom-site/no-specific-user-reference`

Same as `approval-process/no-specific-user-reference`. Applies to the default owner of guest records.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: exempt usernames

**Example:**

```json
{
  "rules": {
    "custom-site/no-specific-user-reference": {
      "severity": "warn",
      "allowlist": [
        "integration@example.com"
      ]
    }
  }
}
```

## `custom-site/no-standard-pages-for-guest`

Any `allowStandard*` true requires an allowlist. Standard search and lookup exposed to the public are classic vectors for record enumeration.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-site/no-standard-pages-for-guest": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `custom-site/clickjack-protection`

Reports `clickjackProtectionLevel` equal to `AllowAllFraming`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-site/clickjack-protection": "error"
  }
}
```

## `custom-site/browser-protections-required`

Reports turning off `browserXssProtection` or `contentSniffingProtection`, because they are free protections.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-site/browser-protections-required": "error"
  }
}
```
