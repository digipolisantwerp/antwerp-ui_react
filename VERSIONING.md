# ACPaaS UI React - versioning guidelines

This package is supplied as a library.
For now, we will not release separate components on NPM.

## Release branches

There is one branch per supported major release, on which that release is developed and published, and to which PR's specific for that release should be sent.

- The current latest stable major release is always on `master`
- Other supported major releases are on the `vX-dev` release branches, where X is replaced by the major version (see below).

Pull requests should target `master`, unless they're specific to a past or future release. Direct commits to `master` are to be avoided.

## Version bumping

The framework is versioned in accordance with [Semantic Versioning](https://semver.org/).
It will have 1 version that will contain all packages.

The maintainers will edit the `CHANGELOG.md` according to the guidelines on [Keep a Changelog](https://keepachangelog.com/).

## Versions

- **Patch** and **Minor**

  No special action required.

- **Major**

  When a method is removed, or its signature changes in breaking ways, the major version number MUST be incremented, and there MUST be a patch or minor release of the previous major version that includes a deprecation warning. Consensus among the maintainers should be reached before doing a new major version since it creates a maintenance burden.

## Maintaining multiple versions

Previous major versions are supported with fixes for 12 months after the release of the next major version. Fixes are not automatically backported, only where necessary. Features are only added on the latest major version.

When older major versions are still supported, a release branch `vX-dev` is maintained for them separate from `master`, on which that older major version is maintained.

> e.g. Our library is at v4 on `master`, but v3 on `v3-dev` is still supported.

The same Semantic Versioning guidelines should be followed in this case. A breaking change is never implemented on an older major version, only on the `master` branch, although new non-breaking features on old major versions remain possible through a minor version release. New features are *not* automatically backported to older versions.

A `vY-dev` branch can be used as a staging ground for the next major release. It is merged into master upon release, and the dev branch is then closed.

## Hotfixes

Sometimes a number of significant changes will be queued up for release on master, and there will be a high priority fix that needs to ship ASAP. In such cases it is best to minimize impact of the high priority fix by making use of a hotfix branch that contains just the fix.

- Merge the necessary changes on `master` first
- Branch `hotfix/vX.Y.Z` from the tag for the latest published release
  - Z is incremented, e.g. the latest release is 4.2.2, the branch is `hotfix/v4.2.3`
- Cherry-pick the necessary changes from `master´
- Version and publish the X.Y.Z release from the hotfix branch as described in the [release guide](RELEASE.md)
- Close the hotfix branch once that hotfix release is no longer the latest published release

## Breaking Changes

We want to avoid new major releases since they create a maintenance burden. Backwards compatibility will be maintained as long as reasonably possible, but components, attributes and methods that will go away can be marked as deprecated until the time a next major release occurs at which point they can be removed.
