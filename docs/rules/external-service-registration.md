# ExternalServiceRegistration

[Back to catalog](README.md)

## `external-service-registration/prefer-named-credential`

Same as `remote-site-setting/prefer-named-credential`. Reports a registration without a named credential.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "external-service-registration/prefer-named-credential": {
      "severity": "warn"
    }
  }
}
```

## `external-service-registration/description-required`

Same as `custom-object/description-required`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `minLength`: minimum description length in characters

**Example:**

```json
{
  "rules": {
    "external-service-registration/description-required": {
      "severity": "error",
      "minLength": 20
    }
  }
}
```

## `external-service-registration/no-secret-in-metadata`

Same as `connected-app/no-secret-in-metadata`. Pays attention to the `securitySchemes` of the OpenAPI schema.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `extraPatterns`: regular expressions added to the built-in detection ones

**Example:**

```json
{
  "rules": {
    "external-service-registration/no-secret-in-metadata": {
      "severity": "error",
      "extraPatterns": [
        "acme_key_[A-Za-z0-9]{32}"
      ]
    }
  }
}
```

## `external-service-registration/status-complete`

Reports a registration with `status` equal to `incomplete`, because the service is not usable.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "external-service-registration/status-complete": "warn"
  }
}
```

## `external-service-registration/no-absolute-schema-url`

Reports a filled-in `schemaAbsoluteUrl`, because it couples the schema to a host outside the named credential.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "external-service-registration/no-absolute-schema-url": {
      "severity": "warn"
    }
  }
}
```

## `external-service-registration/schema-in-repo`

Reports a remote schema without an inline copy, because the service contract stops being versioned.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "external-service-registration/schema-in-repo": {
      "severity": "warn"
    }
  }
}
```
