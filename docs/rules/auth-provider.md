# AuthProvider

[Back to catalog](README.md)

Applies `no-secret-in-metadata` to `consumerSecret` and `no-specific-user-reference` to `executionUser`.

## `auth-provider/endpoints-https`

Applies `https-required` to the OAuth endpoints.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "auth-provider/endpoints-https": {
      "severity": "error",
      "allowlist": [
        "http://localhost:3000"
      ]
    }
  }
}
```

## `auth-provider/credentials-in-header`

Credentials must travel in a header, because a query string leaks into server and proxy logs.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "auth-provider/credentials-in-header": "error"
  }
}
```

## `auth-provider/no-secret-in-apis`

Reports `sendSecretInApis` set to true.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "auth-provider/no-secret-in-apis": "error"
  }
}
```

## `auth-provider/pkce-required`

Reports PKCE turned off on an OpenID Connect provider, because it is the current OAuth 2.0 baseline.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "auth-provider/pkce-required": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```
