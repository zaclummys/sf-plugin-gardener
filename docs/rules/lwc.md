# LWC

[Back to catalog](README.md)

The scope is the bundle metadata file. See [Scope and offline analysis](/concepts/#scope-and-offline-analysis).

## `lwc/description-required`

Same as `custom-object/description-required`. Applies to exposed components, and also to legacy Aura bundles and Visualforce pages kept in the project.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `minLength`: minimum description length in characters

**Example:**

```json
{
  "rules": {
    "lwc/description-required": {
      "severity": "error",
      "minLength": 20
    }
  }
}
```

## `lwc/targets-required`

An exposed LWC component must declare at least one target.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "lwc/targets-required": "error"
  }
}
```

## `lwc/master-label-required`

An exposed component needs `masterLabel`, otherwise the builder shows only the technical name.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "lwc/master-label-required": "error"
  }
}
```

## `lwc/targets-require-exposure`

`targets` declared with `isExposed` false is dead configuration.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "lwc/targets-require-exposure": "error"
  }
}
```

## `lwc/target-config-consistent`

Every `targetConfig` must reference only targets declared in `targets`. The mismatch is a silent error typical of agent editing.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "lwc/target-config-consistent": "error"
  }
}
```

## `lwc/no-relaxed-csp-capability`

The `lightningCommunity__RelaxedCSP` capability loosens security and is reported.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "lwc/no-relaxed-csp-capability": {
      "severity": "error"
    }
  }
}
```

## `lwc/record-page-objects-scoped`

Reports a record page target without `objects` in the `targetConfig`, because the component shows up in the builder for all objects.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "lwc/record-page-objects-scoped": {
      "severity": "warn"
    }
  }
}
```
