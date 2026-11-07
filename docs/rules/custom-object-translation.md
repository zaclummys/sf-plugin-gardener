# CustomObjectTranslation

[Back to catalog](README.md)

Applies the same rules as [Translations](translations.md).

## `custom-object-translation/no-empty-translation-entry`

Same as `translations/no-empty-translation-entry`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "custom-object-translation/no-empty-translation-entry": "warn"
  }
}
```

## `custom-object-translation/coverage-per-language`

Same as `translations/coverage-per-language`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `languages`: checked languages, with all versioned ones as the default

**Example:**

```json
{
  "rules": {
    "custom-object-translation/coverage-per-language": {
      "severity": "error",
      "languages": [
        "pt_BR",
        "es"
      ]
    }
  }
}
```

## `custom-object-translation/locale-valid`

Same as `translations/locale-valid`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `supportedLocales`: accepted locales, with the platform's official list as the default

**Example:**

```json
{
  "rules": {
    "custom-object-translation/locale-valid": {
      "severity": "error",
      "supportedLocales": [
        "pt_BR",
        "en_US"
      ]
    }
  }
}
```
