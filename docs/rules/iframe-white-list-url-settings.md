# IframeWhiteListUrlSettings

[Back to catalog](README.md)

## `iframe-white-list-url-settings/https-required`

Same as `custom-tab/https-required`. Applies to the entries.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "iframe-white-list-url-settings/https-required": {
      "severity": "error"
    }
  }
}
```

## `iframe-white-list-url-settings/allowlist-no-wildcard-domain`

An entry with a domain wildcard is reported, because it allows framing by any subdomain and opens clickjacking.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "iframe-white-list-url-settings/allowlist-no-wildcard-domain": {
      "severity": "error"
    }
  }
}
```
