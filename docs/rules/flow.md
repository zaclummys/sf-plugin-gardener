# Flow

[Back to catalog](README.md)

## `flow/no-workflow-rule`

Same as `workflow/no-workflow-rule`. Applies to a flow with `processType` equal to `Workflow` or `CustomEvent`, which is Process Builder.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "flow/no-workflow-rule": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `flow/description-required`

Same as `custom-object/description-required`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `minLength`: minimum description length in characters

**Example:**

```json
{
  "rules": {
    "flow/description-required": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "minLength": 20
    }
  }
}
```

## `flow/naming-convention`

Same as `custom-object/naming-convention`.

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
    "flow/naming-convention": {
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

## `flow/no-hardcoded-id`

Forbids 15 or 18 character record IDs in formulas, filters, flows and any other XML. Elements that hold an ID by definition, such as `requestSigningCertId` in SamlSsoConfig, go into a built-in list of exemptions.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `exemptElements`: names of XML elements added to the built-in list of exemptions

**Example:**

```json
{
  "rules": {
    "flow/no-hardcoded-id": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "exemptElements": [
        "requestSigningCertId"
      ]
    }
  }
}
```

## `flow/no-inactive-component`

Reports a versioned component with its activation flag turned off. Remove it instead of deactivating it. Applies to the `status` element.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "flow/no-inactive-component": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `flow/fault-path-required`

Every DML and callout element needs a fault connector.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `elementTypes`: element types that require a fault connector, with DML and callout as the default

**Example:**

```json
{
  "rules": {
    "flow/fault-path-required": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "elementTypes": [
        "recordCreates",
        "recordUpdates",
        "recordDeletes",
        "actionCalls"
      ]
    }
  }
}
```

## `flow/no-dml-in-loop`

Forbids a create, update or delete element inside a loop.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "flow/no-dml-in-loop": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `flow/no-query-in-loop`

Forbids a Get Records element inside a loop. The detection walks the connector graph from the `nextValueConnector` and handles `isGoTo` edges.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "flow/no-query-in-loop": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `flow/query-needs-filter`

Reports a Get Records element with no filter.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "flow/query-needs-filter": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `flow/entry-criteria-required`

A record-triggered flow must have entry criteria, so it does not run on every write. The rule checks the `start` without `filters` and without `filterFormula`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "flow/entry-criteria-required": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `flow/one-record-triggered-flow-per-object-per-event`

One flow per object per trigger event, or an explicit orchestrator flow.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `orchestrators`: flows recognized as orchestrators

**Example:**

```json
{
  "rules": {
    "flow/one-record-triggered-flow-per-object-per-event": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "orchestrators": [
        "Account_Orchestrator"
      ]
    }
  }
}
```

## `flow/max-elements`

A flow with more than N elements should be split into subflows.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `max`: N, number of elements. Required
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "flow/max-elements": {
      "severity": "warn",
      "max": 100,
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```
## `flow/auto-layout-required`

The flow must use auto layout. Free mode generates coordinate noise in the diff and hinders review by humans and AI. The detection reads the `processMetadataValues` named `CanvasMode`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "flow/auto-layout-required": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `flow/no-system-mode-without-sharing`

`runInMode` equal to `SystemModeWithoutSharing` requires an allowlist. The mode ignores all sharing and is the dangerous setting that an agent turns on without noticing.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "flow/no-system-mode-without-sharing": {
      "severity": "error",
      "allowlist": [
        "Sync_Accounts"
      ]
    }
  }
}
```

## `flow/trigger-order-explicit`

Reports a record-triggered flow without `triggerOrder` when another flow exists for the same object and event, because the execution order is undefined.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "flow/trigger-order-explicit": "warn"
  }
}
```

## `flow/no-unreachable-flow-element`

A node that no connector reaches from the `start` is dead metadata inside the flow. Agents forget disconnected nodes when refactoring.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "flow/no-unreachable-flow-element": "error"
  }
}
```

## `flow/no-unused-flow-resource`

Reports a variable, formula, constant or text template with no reference in the other elements.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: exempt resource names, such as input and output variables used by the caller of the flow

**Example:**

```json
{
  "rules": {
    "flow/no-unused-flow-resource": {
      "severity": "warn",
      "allowlist": [
        "recordId"
      ]
    }
  }
}
```

## `flow/prefer-before-save-for-same-record-update`

An after save flow that only updates its own record should be before save, because it avoids an extra DML and recursion.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "flow/prefer-before-save-for-same-record-update": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `flow/prefer-entry-filters-over-formula`

Reports `filterFormula` on the `start` when the criteria fit in `filters`, which produce a more readable diff and evaluate cheaper.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "flow/prefer-entry-filters-over-formula": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `flow/restricted-flow-environment`

`environments` with `Slack` or `Offline` requires an allowlist, because a change of execution surface must be intentional.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `restrictedEnvironments`: environments that require an allowlist, with `Slack` and `Offline` as the default

**Example:**

```json
{
  "rules": {
    "flow/restricted-flow-environment": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "restrictedEnvironments": [
        "Slack",
        "Offline"
      ]
    }
  }
}
```

## `flow/no-legacy-start-element`

Reports the presence of `startElementReference`, because it is the legacy form of the `start`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "flow/no-legacy-start-element": "warn"
  }
}
```

## `flow/scheduled-flow-needs-filter`

A scheduled flow with an object and no filter processes the entire table on each run.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "flow/scheduled-flow-needs-filter": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `flow/no-stale-scheduled-flow`

A single-frequency schedule with a date in the past is dead metadata.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "flow/no-stale-scheduled-flow": "error"
  }
}
```

## `flow/interview-label-required`

Reports a screen flow without `interviewLabel`, because the label identifies paused interviews.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "flow/interview-label-required": "warn"
  }
}
```

## `flow/max-decision-branches`

A flow with more than N decision branches. The branches add up the outcomes of decisions and routing rules, and cyclomatic complexity makes review and testing harder.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `max`: N, number of branches. Required

**Example:**

```json
{
  "rules": {
    "flow/max-decision-branches": {
      "severity": "warn",
      "max": 30
    }
  }
}
```

## `flow/max-flow-nesting-depth`

Nested loops and decisions beyond depth N in a flow.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `max`: N, maximum nesting depth. Required

**Example:**

```json
{
  "rules": {
    "flow/max-flow-nesting-depth": {
      "severity": "warn",
      "max": 4
    }
  }
}
```

## `flow/max-subflow-depth`

A chain of flows that call subflows beyond depth N hides the real behavior of the entry flow.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `max`: N, maximum chain depth. Required

**Example:**

```json
{
  "rules": {
    "flow/max-subflow-depth": {
      "severity": "warn",
      "max": 3
    }
  }
}
```
