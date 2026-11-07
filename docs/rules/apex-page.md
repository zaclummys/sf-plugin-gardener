# ApexPage

[Back to catalog](README.md)

The scope is the same as [LWC](lwc.md).

## `apex-page/no-new-page`

A new Visualforce page is reported.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "apex-page/no-new-page": {
      "severity": "error"
    }
  }
}
```

## `apex-page/csrf-token-recommended`

Reports a Visualforce page without `confirmationTokenRequired` true, because the default exposes GET actions to CSRF.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "apex-page/csrf-token-recommended": {
      "severity": "warn"
    }
  }
}
```
