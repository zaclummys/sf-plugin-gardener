# CustomTab

[Back to catalog](README.md)

Applies `description-required`. Applies `no-hardcoded-url` and `https-required` to the `url` of a web tab.

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
