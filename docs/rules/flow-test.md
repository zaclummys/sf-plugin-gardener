# FlowTest

[Back to catalog](README.md)

Applies `description-required`.

## `flow-test/assertion-required`

Reports a test with no assertion, because it always passes and gives the agent false confidence.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "flow-test/assertion-required": "error"
  }
}
```

## `flow-test/assertion-message`

Reports an assertion without `errorMessage`, via `validation-rule/error-message-quality`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

The configuration of `validation-rule/error-message-quality` still applies.

**Example:**

```json
{
  "rules": {
    "flow-test/assertion-message": "warn"
  }
}
```

## `flow-test/flow-covered-by-test`

Reports a record-triggered flow without a matching FlowTest. This gives the agent a declarative regression harness.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "flow-test/flow-covered-by-test": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```
