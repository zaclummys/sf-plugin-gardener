# StaticResource

[Back to catalog](README.md)

## `static-resource/description-required`

Same as `custom-object/description-required`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `minLength`: minimum description length in characters

**Example:**

```json
{
  "rules": {
    "static-resource/description-required": {
      "severity": "error",
      "minLength": 20
    }
  }
}
```

## `static-resource/max-size`

A static resource with more than N megabytes.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `max`: N, size in megabytes. Required

**Example:**

```json
{
  "rules": {
    "static-resource/max-size": {
      "severity": "warn",
      "max": 5
    }
  }
}
```
## `static-resource/cache-control-explicit`

The `cacheControl` element must be declared.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "static-resource/cache-control-explicit": "error"
  }
}
```

## `static-resource/no-public-cache`

Reports `cacheControl` equal to `Public`, because it exposes the content to third-party caches.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "static-resource/no-public-cache": {
      "severity": "warn"
    }
  }
}
```

## `static-resource/content-type-valid`

The `contentType` must be consistent with the extension of the content file. A mismatch is a typical mistake of an agent that edits only the meta.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "static-resource/content-type-valid": "error"
  }
}
```
