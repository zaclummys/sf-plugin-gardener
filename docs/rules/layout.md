# Layout

[Back to catalog](README.md)

## `layout/max-fields-per-layout`

A layout with more than N fields hurts usability and performance.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `max`: N, number of fields. Required

**Example:**

```json
{
  "rules": {
    "layout/max-fields-per-layout": {
      "severity": "warn",
      "max": 100
    }
  }
}
```
## `layout/no-empty-section`

A section without fields should be removed.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "layout/no-empty-section": "error"
  }
}
```

## `layout/no-duplicate-field-in-layout`

The same field cannot appear in two `layoutItems` of the same layout. The deploy rejects it and it is a typical mistake of an agent editing XML without validating.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "layout/no-duplicate-field-in-layout": "error"
  }
}
```

## `layout/required-field-editable-on-layout`

A field required on the CustomField cannot have `behavior` equal to `Readonly` on the layout, because that blocks record creation through the interface.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "layout/required-field-editable-on-layout": "error"
  }
}
```

## `layout/feed-layout-requires-feed-tracking`

A layout with `feedLayout` requires `enableFeeds` true on the corresponding object.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "layout/feed-layout-requires-feed-tracking": "error"
  }
}
```

## `layout/no-tagging-header`

The `PersonalTagging` and `PublicTagging` headers are Classic legacy and must be removed.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "layout/no-tagging-header": "error"
  }
}
```

## `layout/max-empty-space-per-section`

A section with more than N `emptySpace` items indicates a layout designed by trial and error.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `max`: N, number of `emptySpace` items per section. Required

**Example:**

```json
{
  "rules": {
    "layout/max-empty-space-per-section": {
      "severity": "warn",
      "max": 3
    }
  }
}
```

## `layout/max-sections-per-layout`

A layout with more than N sections.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `max`: N, number of sections. Required

**Example:**

```json
{
  "rules": {
    "layout/max-sections-per-layout": {
      "severity": "warn",
      "max": 10
    }
  }
}
```

## `layout/max-related-lists-per-layout`

A layout with more than N related lists.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `max`: N, number of related lists. Required

**Example:**

```json
{
  "rules": {
    "layout/max-related-lists-per-layout": {
      "severity": "warn",
      "max": 10
    }
  }
}
```
