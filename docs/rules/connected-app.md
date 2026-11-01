# ConnectedApp

[Back to catalog](README.md)

## `connected-app/secrets`

Applies `no-secret-in-metadata` with special attention to connected apps.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

The configuration of `no-secret-in-metadata` still applies.

**Example:**

```json
{
  "rules": {
    "connected-app/secrets": "error"
  }
}
```

## `connected-app/callback-https-required`

Applies `https-required` to the connected app callback URL.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "connected-app/callback-https-required": {
      "severity": "error",
      "allowlist": [
        "http://localhost:3000"
      ]
    }
  }
}
```
