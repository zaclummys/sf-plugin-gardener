# WebLink

[Back to catalog](README.md)

Applies `description-required`.

## `web-link/no-javascript-button`

A custom button with JavaScript or s-control is legacy and forbidden. The rule checks `linkType` and `openType`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "web-link/no-javascript-button": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `web-link/mass-action-requires-row-selection`

Reports a mass action button without `requireRowSelection`, because it would act without an explicit selection.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "web-link/mass-action-requires-row-selection": "warn"
  }
}
```
