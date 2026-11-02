# summary

Lint the metadata of a Salesforce DX project.

# description

Reads the configuration of the project in the directory and runs its rules on the metadata files. Works offline and never connects to an org.

# flags.directory.summary

Directory of the project to lint.

# flags.strict.summary

Treat warnings as errors.

# summary.counts

%s errors, %s warnings.

# error.projectNotFound

No Salesforce DX project found in %s or in any directory above it.

# error.configurationNotFound

No configuration file found in %s. Create sf-plugin-gardener.config.json next to sfdx-project.json.

# error.invalidConfiguration

The configuration file %s is not valid JSON.

# error.failed

Lint found problems. See the output above.

# examples

- Lint the project in the current directory:

  <%= config.bin %> <%= command.id %>

- Lint a project and fail on warnings:

  <%= config.bin %> <%= command.id %> --directory force-app --strict
