# IframeWhiteListUrlSettings

[Back to catalog](README.md)

Applies `https-required` to the entries.

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
