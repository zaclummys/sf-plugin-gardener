# Getting started

Gardener is under development and is not published yet. The steps below describe how it installs and runs once the first release is out. The catalog marks each rule as planned or implemented, and a planned rule does not run yet.

## Installation

Install the [Salesforce CLI](https://developer.salesforce.com/tools/salesforcecli), then install the plugin:

```sh
sf plugins install sf-plugin-gardener
```

Check that the command is available:

```sh
sf lint run --help
```

## Configure a project

A project is a [Salesforce DX project](/concepts/#multiple-projects-per-repository), a directory with an `sfdx-project.json`. Create the configuration file in that directory, next to `sfdx-project.json`. The file is named `sf-plugin-gardener.config.json` or `sf-plugin-gardener.config.js`.

No rule is enabled by default, so the first configuration enables the `recommended` [preset](/presets/):

```json
{
  "extends": ["recommended"]
}
```

## Run it

Run the command from the project directory:

```sh
sf lint run
```

The command lists each finding with its file, line, severity, message and rule name. It ends with the number of errors and warnings, and it fails when it finds errors.

These flags change the run:

- `--directory` lints another directory. Every project under it is linted.
- `--strict` treats warnings as errors.
- `--json` prints the result as JSON, for a script or an AI agent to read.

Gardener works offline. It reads the files of the project and never connects to an org.

## Enable more rules

Add a `rules` entry to the configuration. A severity alone is enough for most rules:

```json
{
  "extends": ["recommended"],
  "rules": {
    "custom-object/description-required": "warn"
  }
}
```

The [rules reference](/rules/) shows the properties of each rule and an example of its entry. [Presets](/presets/) explains how an entry changes a rule that a preset already enables.

## Next steps

- [Core concepts](/concepts/): what Gardener analyzes and what it leaves out.
- [Configure](/configuration/): the configuration file in detail.
- [Rules](/rules/): every rule, grouped by metadata type.
