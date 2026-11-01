# CustomMetadata

[Back to catalog](README.md)

## `custom-metadata/protected-only-with-namespace`

Same as `custom-label/protected-only-with-namespace`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-metadata/protected-only-with-namespace": "warn"
  }
}
```

## `custom-metadata/description-required`

Same as `custom-object/description-required`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `minLength`: minimum description length in characters

**Example:**

```json
{
  "rules": {
    "custom-metadata/description-required": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "minLength": 20
    }
  }
}
```

## `custom-metadata/naming-convention`

Same as `custom-object/naming-convention`. Applies to the type and to the records.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `patterns`: map from metadata type to a regular expression for the name
- `forbiddenSuffixes`: list of forbidden suffixes
- `forbiddenPrefixes`: list of forbidden prefixes

**Example:**

```json
{
  "rules": {
    "custom-metadata/naming-convention": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "patterns": {
        "CustomField": "^[A-Z][A-Za-z0-9]*__c$"
      },
      "forbiddenSuffixes": [
        "_v2",
        "_old",
        "_del",
        "_final"
      ],
      "forbiddenPrefixes": [
        "Copy_of"
      ]
    }
  }
}
```

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
