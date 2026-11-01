# Configure

Each project has its own configuration, in the project directory next to `sfdx-project.json`. See [Multiple projects per repository](/concepts/#multiple-projects-per-repository) for how projects are found.

The properties every rule accepts are described in [Common configuration](/rules/#common-configuration). The properties of each rule are described on the rule itself.

## Configuration file

The configuration file is either a JavaScript module that exports the configuration or a JSON file. The rule that the linter does not read source code applies to the files it analyzes, and not to its own configuration. A directory that holds more than one configuration file is an error, and the linter does not choose between them. The file is named `sf-plugin-gardener.config.js` or `sf-plugin-gardener.config.json`. A project without a configuration file is an error, and the linter asks for one to be created. It does not run with no rules.

## Rules

The `rules` entry maps the name of a rule to its severity or, when the rule has other properties, to an object. Every rule example in the [rules reference](/rules/) shows its entry.

No rule is enabled by default.

A preset enables a set of rules at once. See [Presets](/presets/).
