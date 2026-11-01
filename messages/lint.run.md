# summary

Lint the metadata of a Salesforce DX project.

# description

Reads the configuration of each project under the directory and runs its rules on the metadata files. Works offline and never connects to an org.

# flags.directory.summary

Directory to lint. Every project under it is linted.

# flags.strict.summary

Treat warnings as errors.

# summary.counts

%s errors, %s warnings.

# error.failed

Lint found problems. See the output above.

# examples

- Lint the project in the current directory:

  <%= config.bin %> <%= command.id %>

- Lint a project and fail on warnings:

  <%= config.bin %> <%= command.id %> --directory force-app --strict
