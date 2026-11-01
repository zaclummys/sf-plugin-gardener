# Cross-cutting rules

[Back to catalog](README.md)

These rules apply to several metadata types. The following sections only reference them.

## `description-required`

Every custom component needs a filled-in description. The description is the context that humans and AI read before touching the component.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `minLength`: minimum description length in characters

**Example:**

```json
{
  "rules": {
    "description-required": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "minLength": 20
    }
  }
}
```

## `description-max-length`

Description above the character limit of its type, a limit the platform enforces at deploy. Complements `description-required`, which requires the minimum length.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `limits`: map from metadata type to the maximum number, in number of characters

**Reference:** [Salesforce documentation](https://developer.salesforce.com/docs/platform/salesforce-app-limits-cheatsheet/guide/salesforce-app-limits-platform-metadata.html)

**Example:**

```json
{
  "rules": {
    "description-max-length": {
      "severity": "error",
      "limits": {
        "CustomObject": 1000,
        "CustomField": 1000
      }
    }
  }
}
```
## `naming-convention`

The API name must follow the pattern configured for the type. Suffixes such as `_v2`, `_old`, `_del`, `_final` and prefixes such as `Copy_of` are forbidden.

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
    "naming-convention": {
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

## `max-api-name-length`

API name above the character limit of its type, a limit the platform enforces at deploy.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `limits`: map from metadata type to the maximum number, in number of characters

**Reference:** [Salesforce documentation](https://developer.salesforce.com/docs/platform/salesforce-app-limits-cheatsheet/guide/salesforce-app-limits-platform-metadata.html)

**Example:**

```json
{
  "rules": {
    "max-api-name-length": {
      "severity": "error",
      "limits": {
        "CustomObject": 40,
        "CustomField": 40
      }
    }
  }
}
```
## `api-version-consistency`

All `*-meta.xml` files must declare the same apiVersion, aligned with the `sourceApiVersion` of `sfdx-project.json`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `expectedVersion`: required version, with `sourceApiVersion` as the default value

**Example:**

```json
{
  "rules": {
    "api-version-consistency": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "expectedVersion": "60.0"
    }
  }
}
```

## `min-api-version`

Reports apiVersion below the configured minimum.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `minVersion`: minimum accepted version

**Example:**

```json
{
  "rules": {
    "min-api-version": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "minVersion": "60.0"
    }
  }
}
```

## `max-api-version`

An apiVersion above the configured maximum fails at deploy, because the file version cannot be higher than that of the target org. Agents copy versions from newer projects. Complements `min-api-version`.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `maxVersion`: maximum accepted version, required because the linter does not query the org

**Reference:** [Salesforce documentation](https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_intro.htm)

**Example:**

```json
{
  "rules": {
    "max-api-version": {
      "severity": "error",
      "maxVersion": "62.0"
    }
  }
}
```
## `no-hardcoded-id`

Forbids 15 or 18 character record IDs in formulas, filters, flows and any other XML. Elements that hold an ID by definition, such as `requestSigningCertId` in SamlSsoConfig, go into a built-in list of exemptions.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `exemptElements`: names of XML elements added to the built-in list of exemptions

**Example:**

```json
{
  "rules": {
    "no-hardcoded-id": {
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

## `no-hardcoded-url`

Forbids org URLs, such as `*.my.salesforce.com`, in any metadata.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `forbiddenHostPatterns`: forbidden host patterns, with `*.my.salesforce.com` included by default

**Example:**

```json
{
  "rules": {
    "no-hardcoded-url": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "forbiddenHostPatterns": [
        "*.my.salesforce.com"
      ]
    }
  }
}
```

## `no-inactive-component`

Reports a versioned component with its activation flag turned off. Remove it instead of deactivating it.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)

**Example:**

```json
{
  "rules": {
    "no-inactive-component": {
      "severity": "warn",
      "allowlist": [
        "Example_Component"
      ]
    }
  }
}
```

## `no-specific-user-reference`

Reports metadata that points to a specific user. This applies to approver, assignment rule owner and dashboard running user. Prefer a queue, role or hierarchy.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: exempt usernames

**Example:**

```json
{
  "rules": {
    "no-specific-user-reference": {
      "severity": "warn",
      "allowlist": [
        "integration@example.com"
      ]
    }
  }
}
```

## `no-secret-in-metadata`

Forbids a password, token, API key or client secret in any versioned XML.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: [exempt components](README.md#common-configuration)
- `extraPatterns`: regular expressions added to the built-in detection ones

**Example:**

```json
{
  "rules": {
    "no-secret-in-metadata": {
      "severity": "error",
      "allowlist": [
        "Example_Component"
      ],
      "extraPatterns": [
        "acme_key_[A-Za-z0-9]{32}"
      ]
    }
  }
}
```

## `no-hardcoded-email-address`

Reports a person's email address in metadata, such as in an alert copy or an escalation notification. The same reasoning as `no-specific-user-reference` applies.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: exempt addresses
- `allowedDomains`: addresses in these domains are not reported

**Example:**

```json
{
  "rules": {
    "no-hardcoded-email-address": {
      "severity": "warn",
      "allowlist": [
        "ops@example.com"
      ],
      "allowedDomains": [
        "example.com"
      ]
    }
  }
}
```

## `https-required`

Any endpoint, callback or web tab URL element must use https.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `allowlist`: exempt URLs or hosts, such as `localhost`

**Example:**

```json
{
  "rules": {
    "https-required": {
      "severity": "error",
      "allowlist": [
        "http://localhost:3000"
      ]
    }
  }
}
```

## `boolean-filter-valid`

The `booleanFilter` must reference all the declared `criteriaItems` indexes and only them. It is a typical agent mistake when adding or removing a criterion.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)

**Example:**

The filter below declares three criteria and the `booleanFilter` references only two.

```xml
<filters>
  <field>Status</field>
  <operation>equals</operation>
  <value>Open</value>
</filters>
<filters>
  <field>Priority</field>
  <operation>equals</operation>
  <value>High</value>
</filters>
<filters>
  <field>Type</field>
  <operation>equals</operation>
  <value>Bug</value>
</filters>
<booleanFilter>1 AND 2</booleanFilter>
```

The fix is to reference index 3.

```xml
<booleanFilter>1 AND 2 AND 3</booleanFilter>
```

Configuration:

```json
{
  "rules": {
    "boolean-filter-valid": "error"
  }
}
```

## `max-file-lines`

Metadata file above the line limit of its type. A small file fits in the AI context window and reduces merge conflicts between concurrent sessions. A profile with thousands of lines indicates a full retrieve, and the giant diff hides real changes.

**Properties:**

- `severity`: [rule level](README.md#common-configuration)
- `limits`: map from metadata type to the maximum number, in number of lines
- `allowlist`: exempt files, such as a legacy profile not yet split

**Example:**

```json
{
  "rules": {
    "max-file-lines": {
      "severity": "warn",
      "limits": {
        "Profile": 5000,
        "Flow": 1500
      },
      "allowlist": [
        "force-app/main/default/profiles/Admin.profile-meta.xml"
      ]
    }
  }
}
```
