# Architecture

The plugin is a Salesforce CLI plugin built on oclif. It is layered so every command reuses the same core. Dependencies point one way only: commands depend on services and on ui, both depend on core, and nothing depends the other way.

## Layers

- **Commands** (`src/commands/lint/`): oclif only. They parse flags, build the service, render the output and set the exit code.
- **Services** (`src/services/`): one per command. Each is a class whose constructor takes its dependencies, while the inputs of a run are the parameters of `run()`. The contracts of the adapters live in `src/services/adapters/`, and a service never imports `src/adapters/`.
- **Core** (`src/core/`): the reusable building blocks, such as the findings, the configuration contract, the registry of metadata types and the index. It is pure and imports nothing from `@salesforce/*`, so each piece is testable on its own.
- **Rules** (`src/rules/<type>/`): one file per rule, in a directory named after the metadata type. The directory is the namespace in the rule name.
- **Adapters** (`src/adapters/`): the implementations of the contracts in `src/services/adapters/`, such as the readers of XML, JSON and YAML, the loader of the configuration file and the file system. See [Core concepts](/concepts/#scope-and-offline-analysis) for what the linter may read.
- **UI** (`src/ui/`): the human format of the output and the only place that knows about colour.

## Pipeline

Every run is the same five stages: **discover**, **parse**, **index**, **run rules** and **report**.

1. Discover the project and load its configuration.
2. Parse each file into a plain tree that keeps the line and column of every element.
3. Index the components of every file.
4. Run the rules. File rules run once per file. Project rules run once and query the index.
5. Report the findings.

Two phases are needed because rules such as `project/no-duplicate-metadata` and `project/max-files` need the whole project, which ESLint does not have to deal with.

## Rules

A rule is a module with two parts. The `meta` part holds the name in the form `type/rule`, the metadata type it reads, the schema of its properties and its default severity. The `create` part receives a context and returns the visitors, which are keyed by metadata type and by path, such as `Flow > start > filters`.

A rule only reports. The engine applies the severity and the allowlist, so no rule repeats that logic.

A registry maps the file suffix and the directory to a metadata type, including the decomposed layout such as `objects/X/fields/Y.field-meta.xml`. It is what keeps one type per namespace.

## Output

A command returns a typed result and the Salesforce CLI builds the `--json` envelope from it. The human format lives in the ui layer. There is no pluggable formatter system. SARIF is added as a function of the findings when an integration needs it.


## Design notes

- The output must exist in human format and in JSON or SARIF, so that an AI agent can consume the result and fix in a loop.
- Fill-in rules, such as description and category, are good candidates for AI-assisted autofix.
- One-off suppression with a recorded justification, in the spirit of `eslint-disable`, is planned for a later version. Rules do not support it yet.
