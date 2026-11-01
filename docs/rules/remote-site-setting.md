# RemoteSiteSetting

[Back to catalog](README.md)

## `remote-site-setting/prefer-named-credential`

Reports a new remote site setting. Callouts must use a named credential.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "remote-site-setting/prefer-named-credential": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```
