# SamlSsoConfig

[Back to catalog](README.md)

Applies `https-required` to `loginUrl` and `logoutUrl`.

## `saml-sso-config/validation-cert-not-expired`

Decodes the X.509 inside `validationCert` and applies the same offline validity check as `certificate/not-expired`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "saml-sso-config/validation-cert-not-expired": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
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
