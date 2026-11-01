# BusinessProcess

[Back to catalog](README.md)

Applies `description-required` and `no-inactive-component`.

## `business-process/values-exist`

Each listed value must exist in the corresponding value set when it is versioned.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "business-process/values-exist": "error"
  }
}
```
