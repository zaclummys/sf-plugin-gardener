# FlowTest

[Back to catalog](README.md)

## `flow-test/error-message-quality`

Same as `validation-rule/error-message-quality`. Applies to the `errorMessage` of an assertion.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `minLength`: minimum message length in characters
- `genericMessages`: forbidden generic texts

**Example:**

```json
{
  "rules": {
    "flow-test/error-message-quality": {
      "severity": "error",
      "minLength": 30,
      "genericMessages": [
        "Invalid value",
        "Error"
      ]
    }
  }
}
```

## `flow-test/description-required`

Same as `custom-object/description-required`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `minLength`: minimum description length in characters

**Example:**

```json
{
  "rules": {
    "flow-test/description-required": {
      "severity": "error",
      "minLength": 20
    }
  }
}
```

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

## `flow-test/flow-covered-by-test`

Reports a record-triggered flow without a matching FlowTest. This gives the agent a declarative regression harness.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "flow-test/flow-covered-by-test": {
      "severity": "warn"
    }
  }
}
```
