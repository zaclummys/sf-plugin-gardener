# ConnectedApp

[Back to catalog](README.md)

## `connected-app/https-required`

Same as `custom-tab/https-required`. Applies to the callback URL.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: exempt URLs or hosts, such as `localhost`

**Example:**

```json
{
  "rules": {
    "connected-app/https-required": {
      "severity": "error",
      "allowlist": [
        "http://localhost:3000"
      ]
    }
  }
}
```

## `connected-app/no-secret-in-metadata`

Forbids a password, token, API key or client secret in any versioned XML.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `extraPatterns`: regular expressions added to the built-in detection ones

**Example:**

```json
{
  "rules": {
    "connected-app/no-secret-in-metadata": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "extraPatterns": [
        "acme_key_[A-Za-z0-9]{32}"
      ]
    }
  }
}
```
