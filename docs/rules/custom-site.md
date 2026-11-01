# CustomSite

[Back to catalog](README.md)

Applies `no-specific-user-reference` to the default owner of guest records and `no-inactive-component` to the `active` element.

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
