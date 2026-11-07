# Certificate

[Back to catalog](README.md)

## `certificate/not-expired`

Reports `expirationDate` in the past. This avoids the classic SSO outage from an expired certificate.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "certificate/not-expired": {
      "severity": "error"
    }
  }
}
```

## `certificate/expiring-soon`

Reports `expirationDate` less than N days away. It also applies to the `validationCert` of SamlSsoConfig, after decoding the X.509.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `warnDays`: N, lead time in days counted from the expiration date

**Example:**

```json
{
  "rules": {
    "certificate/expiring-soon": {
      "severity": "warn",
      "warnDays": 60
    }
  }
}
```

## `certificate/private-key-not-exportable`

`privateKeyExportable` must be declared as `false`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "certificate/private-key-not-exportable": {
      "severity": "error"
    }
  }
}
```

## `certificate/min-key-size`

Reports `keySize` below the configured minimum.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `minKeySize`: minimum key size in bits

**Example:**

```json
{
  "rules": {
    "certificate/min-key-size": {
      "severity": "warn",
      "minKeySize": 2048
    }
  }
}
```

## `certificate/no-private-key-material`

Reports a PEM private key block in a certificate file or in a markup file, such as XML, JSON or YAML, extending the secret rules beyond XML. Source code files are not scanned.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "certificate/no-private-key-material": {
      "severity": "error"
    }
  }
}
```
