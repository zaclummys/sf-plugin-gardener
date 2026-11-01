# ExperienceBundle

[Back to catalog](README.md)

## `experience-bundle/no-public-site`

A site with public authentication requires an allowlist. Making the site public is the heaviest security decision in the bundle and an AI agent must not make it by accident.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "experience-bundle/no-public-site": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `experience-bundle/no-public-route`

A route with `pageAccess` equal to `Public` requires a per-route allowlist, because the override punctures the site control and goes unnoticed in a large diff.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: authorized routes, identified by site and route name

**Example:**

```json
{
  "rules": {
    "experience-bundle/no-public-route": {
      "severity": "error",
      "allowlist": [
        "Portal:Home"
      ]
    }
  }
}
```
