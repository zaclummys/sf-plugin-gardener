# ExperienceBundle

[Back to catalog](README.md)

## `experience-bundle/no-public-site`

A site with public authentication is reported. Making the site public is the heaviest security decision in the bundle and an AI agent must not make it by accident.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "experience-bundle/no-public-site": {
      "severity": "error"
    }
  }
}
```

## `experience-bundle/no-public-route`

A route with `pageAccess` equal to `Public` is reported, because the override punctures the site control and goes unnoticed in a large diff.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "experience-bundle/no-public-route": {
      "severity": "error"
    }
  }
}
```
