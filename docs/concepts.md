# Core concepts

## Scope and offline analysis

The focus is declarative XML metadata. Rules for Apex and LWC code are out of scope, because other tools already cover those layers, such as PMD, ESLint and Code Analyzer. The catalog covers the metadata files next to that code, such as the `-meta.xml` of a class or of a bundle.

The linter reads markup formats, such as XML, JSON and YAML, and never parses source code. It also reads file metadata, such as name, extension and size.

All rules are offline. The analysis reads only the repository files and the linter never connects to an org.

## One project per run

A project is a [Salesforce DX project](https://developer.salesforce.com/docs/platform/sfdx-dev/guide/sfdx-dev-ws-create-new.html): a directory that holds an `sfdx-project.json`. The linter analyzes every file under that directory. Each run lints exactly one project.

The linter finds the project by its `sfdx-project.json`. The limits `project/max-files` and `project/max-size` count the files of that project.

The linter configuration is in the project directory. The `.forceignore` is optional, so the `project/forceignore-*` rules run only when the project has one.

`project/no-duplicate-metadata` compares the files of the project.
