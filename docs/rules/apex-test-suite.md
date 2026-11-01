# ApexTestSuite

[Back to catalog](README.md)

## `apex-test-suite/no-empty-test-suite`

Reports a suite with no class.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "apex-test-suite/no-empty-test-suite": "error"
  }
}
```

## `apex-test-suite/no-wildcard-test-suite`

Reports a wildcard in `testClassName`, because the suite stops documenting what it covers.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "apex-test-suite/no-wildcard-test-suite": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```
