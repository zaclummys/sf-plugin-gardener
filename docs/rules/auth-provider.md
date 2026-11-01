# AuthProvider

[Back to catalog](README.md)

## `auth-provider/no-specific-user-reference`

Same as `approval-process/no-specific-user-reference`. Applies to `executionUser`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: exempt usernames

**Example:**

```json
{
  "rules": {
    "auth-provider/no-specific-user-reference": {
      "severity": "warn",
      "allowlist": [
        "integration@example.com"
      ]
    }
  }
}
```

## `auth-provider/no-secret-in-metadata`

Same as `connected-app/no-secret-in-metadata`. Applies to `consumerSecret`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `extraPatterns`: regular expressions added to the built-in detection ones

**Example:**

```json
{
  "rules": {
    "auth-provider/no-secret-in-metadata": {
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

## `auth-provider/endpoints-https`

Same as `custom-tab/https-required`. Applies to the OAuth endpoints.

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
