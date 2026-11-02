# Configure

The configuration is in the project directory, next to `sfdx-project.json`. See [One project per run](/concepts/#one-project-per-run) for how the project is found.

The properties every rule accepts are described in [Common configuration](/rules/#common-configuration). The properties of each rule are described on the rule itself.

## Configuration file

The configuration file is a JSON file named `sf-plugin-gardener.config.json`. A project without a configuration file is an error, and the linter asks for one to be created. It does not run with no rules.

## Rules

The `rules` entry maps the name of a rule to its severity or, when the rule has other properties, to an object. Every rule example in the [rules reference](/rules/) shows its entry.

No rule is enabled by default.

A preset enables a set of rules at once. See [Presets](/presets/).
