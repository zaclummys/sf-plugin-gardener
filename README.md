![Gardener](assets/banner.svg)

# Gardener

Gardener is a Salesforce CLI plugin that lints the metadata of Salesforce DX projects.

It reads the XML metadata files of a project and reports what fails at deploy, exposes data or breaks a platform limit. It works offline and never connects to an org.

## Status

Gardener is under development and is not published yet. The rules catalog and the design are written, and the code is a skeleton.

## Documentation

The documentation is published at https://zaclummys.github.io/sf-plugin-gardener/. Its source lives in [docs](docs) and is built with Eleventy. To read it locally:

```sh
npm install
npm run docs:dev
```

Then open http://localhost:8080/. The pages cover the core concepts, the configuration, the presets and the rules catalog.

## Development

```sh
npm install
npm run build
```

`npm run build` compiles the plugin and lints the repository.

## License

BSD-3-Clause. See [LICENSE.md](LICENSE.md).
