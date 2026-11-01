# IframeWhiteListUrlSettings

[Back to catalog](README.md)

## `iframe-white-list-url-settings/https-required`

Same as `custom-tab/https-required`. Applies to the entries.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: exempt URLs or hosts, such as `localhost`

**Example:**

```json
{
  "rules": {
    "iframe-white-list-url-settings/https-required": {
      "severity": "error",
      "allowlist": [
        "http://localhost:3000"
      ]
    }
  }
}
```

## `iframe-white-list-url-settings/allowlist-no-wildcard-domain`

An entry with a domain wildcard requires an allowlist, because it allows framing by any subdomain and opens clickjacking.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: entries authorized to use a wildcard

**Example:**

```json
{
  "rules": {
    "iframe-white-list-url-settings/allowlist-no-wildcard-domain": {
      "severity": "error",
      "allowlist": [
        "*.example.com"
      ]
    }
  }
}
```
