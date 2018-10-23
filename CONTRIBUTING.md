# ACPaaS UI Contributing Guide

Hi! We're really excited that you are interested in contributing to ACPaaS UI. Before submitting your contribution though, please make sure to take a moment and read through the following guidelines.

- [ACPaaS UI Contributing Guide](#acpaas-ui-contributing-guide)
  - [Issue Reporting Guidelines](#issue-reporting-guidelines)
  - [Pull Request Guidelines](#pull-request-guidelines)
  - [Development Setup](#development-setup)
    - [Committing Changes](#committing-changes)
    - [Commonly used NPM scripts](#commonly-used-npm-scripts)
  - [Releases](#releases)
  - [Credits](#credits)

## Issue Reporting Guidelines

- If you're not yet a member of our DigAnt Café slack community, you can easily [join here][digantcafe-slack].
- Use the [#acpaas-ui-react channel][acpaas-ui-react-slack] on slack to ask questions or discuss changes to the code itself.
- Use [GitHub Issues][github-issues] to report bugs, request features, ask policy questions or propose policy changes.

  > Note: policy questions are about the way ACPaaS UI is developed and released, or about its architecture. We use github issues to have a public archive of these discussions.

## Pull Request Guidelines

- The `master` branch is where we ship releases from. Always send PRs to `master`.

- Commit your changes to a topic branch with a name matching these examples:
  - `feature/more-cowbell`
  - `fix/42-broken-cowbell` (the issue id is in the branch name)
  - `docs/document-cowbell`

- Work in the `packages` folder and **DO NOT** check in the top-level `dist` or `styleguide` folders in the commits.

- Make sure `npm test` passes. (see [development setup](#development-setup))

- If adding a new feature:
  - Add an accompanying test case.
  - Provide a convincing reason to add this feature. Ideally you should open a [feature request issue](https://github.com/digipolisantwerp/acpaas-ui_react/issues/new?template=feature_request.md) first and have it greenlighted before working on it.

- If fixing a bug:
  - Provide a detailed description of the bug in the PR or an accompanying [bug report issue](https://github.com/digipolisantwerp/acpaas-ui_react/issues/new?template=bug_report.md) linked from the PR (recommended).
  - Add appropriate test coverage if applicable.

## Development Setup

You will need [Node.js](http://nodejs.org) **version 8+**.

After cloning the repo, run:

```bash
# install dependencies
$ npm install # or yarn
# run the styleguide app (examples & documentation)
$ npm start
```

### Committing Changes

Commit messages should clearly describe what changed. A [good commit message](https://chris.beams.io/posts/git-commit/) completes the sentence "When committed this will …"

### Commonly used NPM scripts

``` bash
# serve styleguidist
$ npm run start

# build all dist files, including npm packages
$ npm run build

# run the full test suite, include linting / type checking
$ npm test
```

There are some other scripts available in the `scripts` section of the `package.json` file.

The default test script will do the following: lint with ESLint -> unit tests with coverage -> e2e tests. **Please make sure to have this pass successfully before submitting a PR.** Although the same tests will be run against your PR on the CI server, it is better to have it working locally beforehand.

## Releases

ACPaaS UI is supplied as a single library on NPM [@acpaas-ui/react-components](https://www.npmjs.com/package/@acpaas-ui/react-components).

It is released once a week, or more often if there are high priority changes.

If your PR has been merged but not yet released, and it is high priority, please ping the [#acpaas-ui-react channel][acpaas-ui-react-slack] to ask for an out-of-band release (if you're not yet a member of our DigAnt Café slack community, you can easily [join here][digantcafe-slack]). However, before you do so, container whether you can use a [local install or the npm link command](https://medium.com/@the1mills/how-to-test-your-npm-module-without-publishing-it-every-5-minutes-1c4cb4b369be) instead, or whether you can publish your own development snapshot package under your personal scope on NPM.

A [changelog](CHANGELOG.md) is provided for your convenience.

> Maintainers: see the [versioning guide](./VERSIONING.md) for guidance on releases and versioning.

## Credits

Thank you to all the people who have already contributed to ACPaaS UI!

[github-issues]: https://github.com/digipolisantwerp/acpaas-ui_react/issues
[acpaas-ui-react-slack]: https://digantcafe.slack.com/messages/CDGCW8U30/
[digantcafe-slack]: https://digantcafe-slack.digipolis.be
