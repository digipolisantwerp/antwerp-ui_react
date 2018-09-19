# ACPaaS UI - React Components

## Introduction

Antwerp City Platform as a Service User Interface (ACPaas UI) is a **component interface library** for building user interfaces and responsive web apps. It's designed to provide developers with functionality and UI/UX patterns that matches the Antwerpen styleguide.

## Ecosystem

This library is part of [ACPaaS UI][acpaas-ui].

| Name              | Framework  | Status  |
| ----------------- | ---------- | ------- |
| Schematics        | ES5+       | [![acpaas-ui-schematics-github]][acpaas-ui-schematics] |
| Javascript        | ES5+       | [![acpaas-ui-js-github]][acpaas-ui-js] |
| Angular           | Angular 6+ | [![acpaas-ui-angular-github]][acpaas-ui-angular] |
| React             | React 16+  | [![acpaas-ui-react-github]][acpaas-ui-react] |

## Getting Started

```sh
npm install @acpaas-ui/react-components
```

Import the core branding to style the components:

```scss
@import url("https://cdn.antwerpen.be/core_branding_scss/2.3.0/main.min.css");
```

You can also add a core branding compatible [flexbox grid layout system](flexboxgrid):

```sh
npm install @a-ui/flexboxgrid
```

```scss
@import '@a-ui/flexboxgrid/dist/flexboxgrid.min.css';
```

Check out the [live examples and API docs](https://digipolisantwerp.github.io/acpaas-ui_react/) to learn more.

> To learn more about using the branding look & feel, check the [core branding guide][branding-core-guide]. Note that the [core branding][branding-core] contains the Antwerp logo and fonts, which are subject to a usage restriction. For use outside of apps for the city of Antwerp you can use [acpaas branding][branding-acpaas] instead.

## Questions

For questions and support please ask a question on the [#acpaas-ui-react slack channel][acpaas-ui-react-slack].

If you stumble across a bug or missing feature, feel free to [report an issue][acpaas-ui-react-issues]. Please fill out the issue template completely when [opening an issue][acpaas-ui-react-issues]. This will help us get to your issue sooner.

## Changelog

Detailed changes for each release are documented in the [changelog](./CHANGELOG.md).

## Contributing

Your contributions are most welcome as pull requests, both code changes and documentation updates. However, to keep a high quality standard, please make sure to read the [Contributing Guide](./CONTRIBUTING.md) before making a pull request.

Thank you to all the people [who already contributed][acpaas-ui-react-contributors] to ACPaaS UI!

## License

[MIT](./LICENSE.md)

Copyright (c) 2018-present, Digipolis

<!-- Generic Links -->
[acpaas-ui]: https://acpaas-ui.digipolis.be
[acpaas-ui-react-slack]: https://dgpls.slack.com/messages/CCKU53FKN
[flexboxgrid]: https://github.com/a-ui/core_flexboxgrid_scss

<!-- Github links -->

<!-- Github URL -->
[acpaas-ui-schematics]: https://github.com/digipolisantwerp/acpaas-ui_schematics
[acpaas-ui-js]: https://github.com/digipolisantwerp/acpaas-ui_js
[acpaas-ui-angular]: https://github.com/digipolisantwerp/acpaas-ui_angular
[acpaas-ui-react]: https://github.com/digipolisantwerp/acpaas-ui_react
[acpaas-ui-react-issues]: https://github.com/digipolisantwerp/acpaas-ui_react/issues
[acpaas-ui-react-contributors]: https://github.com/digipolisantwerp/acpaas-ui_react/graphs/contributors
[branding-core]: https://github.com/a-ui/core_branding_scss
[branding-core-guide]: https://a-ui.github.io/core_branding_scss/
[branding-acpaas]: https://github.com/a-ui/acpaas_branding_scss

<!-- Github Version Badge -->
[acpaas-ui-schematics-github]: https://img.shields.io/github/package-json/v/digipolisantwerp/acpaas-ui_schematics.svg
[acpaas-ui-angular-github]: https://img.shields.io/github/package-json/v/digipolisantwerp/acpaas-ui_angular.svg
[acpaas-ui-react-github]: https://img.shields.io/github/package-json/v/digipolisantwerp/acpaas-ui_react.svg
[acpaas-ui-js-github]: https://img.shields.io/github/package-json/v/digipolisantwerp/acpaas-ui_js.svg
