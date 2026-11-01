# CustomMetadata

[Back to catalog](README.md)

Applies `description-required` and `naming-convention` to the type and to the records.

## `custom-metadata/record-has-type`

The record name prefix must match a `__mdt` object present in the project.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-metadata/record-has-type": "error"
  }
}
```

## `custom-metadata/complete-values`

Every field of the `__mdt` type must appear in the `values` of each record, even with an explicit empty value. Omission becomes a silent `null` at runtime and is invisible in the diff.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-metadata/complete-values": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `custom-metadata/protected-only-with-namespace`

Same logic as `custom-label/protected-only-with-namespace`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-metadata/protected-only-with-namespace": "error"
  }
}
```
