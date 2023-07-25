# Deprecated

This repo is deprecated. Please, see https://github.com/a-ui/core_components_react

# Antwerp UI - React Components

## Introduction

Antwerp City Platform as a Service User Interface (Antwerp UI) is a **component interface library** for building user interfaces and responsive web apps. It's designed to provide developers with functionality and UI/UX patterns that matches the Antwerpen styleguide.

## Ecosystem

This library is part of [Antwerp UI][antwerp-ui].

| Name              | Framework  | Status  |
| ----------------- | ---------- | ------- |
| Javascript        | ES5+       | [![antwerp-ui-js-github]][antwerp-ui-js] |
| Angular           | Angular 6+ | [![antwerp-ui-angular-github]][antwerp-ui-angular] |
| React             | React 16+  | [![antwerp-ui-react-github]][antwerp-ui-react] |

## Getting Started

```sh
npm install @acpaas-ui/react-components
```

Import the core branding to style the components:

```scss
@import url("https://cdn.antwerpen.be/core_branding_scss/5.0.0/main.min.css");
```

You can also add a branding-compatible [flexbox grid layout system][flexboxgrid]:

```scss
@import url('https://cdn.antwerpen.be/core_flexboxgrid_scss/2.0.0/flexboxgrid.min.css');
```

Note that you are free to use your own grid, as long as it meets our branding guidelines.

> To learn more about using the branding look & feel, check the [core branding guide][branding-core-guide]. Note that the [core branding][branding-core] contains the Antwerp logo and fonts, which are subject to a usage restriction. For use outside of apps for the city of Antwerp you can use [acpaas branding][branding-acpaas] instead.

Check out the [live examples and API docs](https://digipolisantwerp.github.io/antwerp-ui_react/) to learn more.

## Questions

For questions and support please ask a question on the [#antwerp-ui-react slack channel][antwerp-ui-react-slack]. If you're not yet a member of our DigAnt Café slack community, you can easily [join here][digantcafe-slack].

If you stumble across a bug or missing feature, feel free to [report an issue][antwerp-ui-react-issues]. Please fill out the issue template completely when [opening an issue][antwerp-ui-react-issues]. This will help us get to your issue sooner.

## Changelog

Detailed changes for each release are documented in the [changelog](./CHANGELOG.md).

## Contributing

Your contributions are most welcome as pull requests, both code changes and documentation updates. However, to keep a high quality standard, please make sure to read the [Contributing Guide](./CONTRIBUTING.md) before making a pull request.

Thank you to all the people [who already contributed][antwerp-ui-react-contributors] to Antwerp UI!

## Support

Jasper Van Proeyen (<jasper.vanproeyen@digipolis.be>)

## License

[MIT](./LICENSE.md)

Copyright (c) 2018-present, Digipolis

<!-- Generic Links -->
[antwerp-ui]: https://antwerp-ui.digipolis.be
[antwerp-ui-react-slack]: https://digantcafe.slack.com/messages/CDGCW8U30/
[flexboxgrid]: https://github.com/a-ui/core_flexboxgrid_scss
[digantcafe-slack]: https://digantcafe-slack.digipolis.be

<!-- Github links -->

<!-- Github URL -->
[antwerp-ui-js]: https://github.com/digipolisantwerp/antwerp-ui_js
[antwerp-ui-angular]: https://github.com/digipolisantwerp/antwerp-ui_angular
[antwerp-ui-react]: https://github.com/digipolisantwerp/antwerp-ui_react
[antwerp-ui-react-issues]: https://github.com/digipolisantwerp/antwerp-ui_react/issues
[antwerp-ui-react-contributors]: https://github.com/digipolisantwerp/antwerp-ui_react/graphs/contributors
[branding-core]: https://github.com/a-ui/core_branding_scss
[branding-core-guide]: https://a-ui.github.io/core_branding_scss/
[branding-acpaas]: https://github.com/a-ui/acpaas_branding_scss

<!-- Github Version Badge -->
[antwerp-ui-angular-github]: https://img.shields.io/github/package-json/v/digipolisantwerp/antwerp-ui_angular.svg
[antwerp-ui-react-github]: https://img.shields.io/github/package-json/v/digipolisantwerp/antwerp-ui_react.svg
[antwerp-ui-js-github]: https://img.shields.io/github/package-json/v/digipolisantwerp/antwerp-ui_js.svg
