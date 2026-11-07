# EmailServicesFunction

[Back to catalog](README.md)

## `email-services-function/no-inactive-component`

Same as `flow/no-inactive-component`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "email-services-function/no-inactive-component": {
      "severity": "warn"
    }
  }
}
```

## `email-services-function/no-specific-user-reference`

Same as `approval-process/no-specific-user-reference`. `runAsUser` is exempt, because it is required.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "email-services-function/no-specific-user-reference": {
      "severity": "warn"
    }
  }
}
```

## `email-services-function/authorized-senders-required`

An empty `authorizedSenders` is reported, because the service would execute Apex from an email from any sender.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "email-services-function/authorized-senders-required": {
      "severity": "error"
    }
  }
}
```

## `email-services-function/authentication-required`

Reports waiving the SPF and DKIM check.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "email-services-function/authentication-required": {
      "severity": "warn"
    }
  }
}
```
