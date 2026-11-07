# SamlSsoConfig

[Back to catalog](README.md)

## `saml-sso-config/not-expired`

Same as `certificate/not-expired`. Applies to the X.509 inside `validationCert`, decoded offline.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "saml-sso-config/not-expired": {
      "severity": "error"
    }
  }
}
```

## `saml-sso-config/https-required`

Same as `custom-tab/https-required`. Applies to `loginUrl` and `logoutUrl`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "saml-sso-config/https-required": {
      "severity": "error"
    }
  }
}
```

## `saml-sso-config/sha256-required`

Reports request signing with SHA-1, because the algorithm is cryptographically obsolete.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "saml-sso-config/sha256-required": "error"
  }
}
```
