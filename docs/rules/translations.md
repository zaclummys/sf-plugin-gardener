# Translations

[Back to catalog](README.md)

## `translations/no-empty-translation-entry`

Reports a translation entry with empty text. An entry whose text came commented out of the retrieve counts as empty. A full retrieve dumps hundreds of these entries, which only create diff noise.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "translations/no-empty-translation-entry": "warn"
  }
}
```

## `translations/coverage-per-language`

For each versioned language, every translatable component needs a matching entry. Silent partial coverage is the typical mistake of an agent that creates a field and forgets the translation.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `languages`: checked languages, with all versioned ones as the default

**Example:**

```json
{
  "rules": {
    "translations/coverage-per-language": {
      "severity": "error",
      "languages": [
        "pt_BR",
        "es"
      ]
    }
  }
}
```

## `translations/locale-valid`

Reports a locale suffix outside the list of supported languages.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `supportedLocales`: accepted locales, with the platform's official list as the default

**Example:**

```json
{
  "rules": {
    "translations/locale-valid": {
      "severity": "error",
      "supportedLocales": [
        "pt_BR",
        "en_US"
      ]
    }
  }
}
```
