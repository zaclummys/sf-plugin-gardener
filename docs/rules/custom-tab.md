# CustomTab

[Back to catalog](README.md)

## `custom-tab/description-required`

Same as `custom-object/description-required`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `minLength`: minimum description length in characters

**Example:**

```json
{
  "rules": {
    "custom-tab/description-required": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "minLength": 20
    }
  }
}
```

## `custom-tab/no-hardcoded-url`

Forbids org URLs, such as `*.my.salesforce.com`, in any metadata. Applies to the `url` of a web tab.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `forbiddenHostPatterns`: forbidden host patterns, with `*.my.salesforce.com` included by default

**Example:**

```json
{
  "rules": {
    "custom-tab/no-hardcoded-url": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "forbiddenHostPatterns": [
        "*.my.salesforce.com"
      ]
    }
  }
}
```

## `custom-tab/https-required`

Any endpoint, callback or web tab URL element must use https. Applies to the `url` of a web tab.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: exempt URLs or hosts, such as `localhost`

**Example:**

```json
{
  "rules": {
    "custom-tab/https-required": {
      "severity": "error",
      "allowlist": [
        "http://localhost:3000"
      ]
    }
  }
}
```

## `custom-tab/no-scontrol-tab`

An s-control tab uses discontinued technology and is forbidden.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-tab/no-scontrol-tab": "error"
  }
}
```

## `custom-tab/no-splash-page`

Reports `splashPageLink`, because it is a Classic legacy.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-tab/no-splash-page": "warn"
  }
}
```
