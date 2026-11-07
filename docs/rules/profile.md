# Profile

[Back to catalog](README.md)

## `profile/minimal-profile`

The versioned profile may only contain layout assignment, default record type and login settings. Reports any object, field or system permission in the profile.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowedElements`: top-level elements accepted in the profile, with the three mentioned groups as the default

**Example:**

```json
{
  "rules": {
    "profile/minimal-profile": {
      "severity": "error",
      "allowedElements": [
        "layoutAssignments",
        "recordTypeVisibilities",
        "loginHours",
        "loginIpRanges"
      ]
    }
  }
}
```

## `profile/prefer-permission-set`

Every new permission goes into a permission set. This rule is the complement of `profile/minimal-profile`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "profile/prefer-permission-set": "error"
  }
}
```
