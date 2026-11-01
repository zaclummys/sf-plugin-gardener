# EmailServicesFunction

[Back to catalog](README.md)

Applies `no-inactive-component`. `no-specific-user-reference` applies with an exception for `runAsUser`, which is required.

## `email-services-function/authorized-senders-required`

An empty `authorizedSenders` requires an allowlist, because the service would execute Apex from an email from any sender.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "email-services-function/authorized-senders-required": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `email-services-function/authentication-required`

Reports waiving the SPF and DKIM check.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "email-services-function/authentication-required": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```
