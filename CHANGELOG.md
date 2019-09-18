# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/),
and this project adheres to [Semantic Versioning](https://semver.org/).

## [Unrelease - v4.0.0]

All the following depend on Core Branding v4+.

- `FlyOut` [BREAKING] Pass `onClick` as argument to trigger.
- `CardIcon` [BREAKING] Make `aria-label` required.
- `Button` [BREAKING] Make `aria-label` required.
- `Icon` [BREAKING] `<i>` is for italic, not for icons. Only `<span class="..."></span>` is allowed. [WCAG 2.1 AA - Identify purpose](https://www.w3.org/TR/WCAG21/#identify-purpose)
- `Calendar` Add `aria-label` for navigation.
- `Badge` Add `aria-label` and `title`.
- `Alert` Add `aria-label`.
- `Avatar` Add `u-screen-reader-only` 'User Icon' info.
- `Button` Add contrast warning for negative toggle. [WCAG 2.1 AA - Contrast](https://www.w3.org/TR/WCAG21/#contrast-minimum)
- `Tag`/`TagListItem` Add extra WVAG information for `aria-label`.

## [Unreleased]
- `ButtonGroup` Added option for vertical button group (depends on core branding 3.2)
- `Autocomplete` Fixed items not updating when searching, added defaultValue option, added empty state, fixed open state issue
- `Flyout` Added an option to handle state change
- `Datepicker` Fixed an issue where the datepicker spams console when it is not loaded correctly
- `TextField` Add the option to disable autocomplete
- `TextField` Add disabled option
- `Autocomplete` Remove console log
- `Autocomplete` Take propegation delay into account when triggering search from componentWillReceiveProps
- `TextField` fix console errors
- `TextField` add support for left and right icon
- `Autocomplete` add support for loading state
- `Autocomplete` add support for disabled state
- `Flyout` add support for outside close actions
- `Flyout` handle outside click state better
- `Autocomplete` Add support for handling autocomplete close
- `Autocomplete` add support for error states
- `Select` add support for loading state
- `Avatar` add option for className

### Added
- `Form/Select` Added support for defaultValue on select

### Fixed
- `Form/Checkbox` Fixed checking of checkboxes
- `Form/Checkbox` Fixed required label on checkboxes
- `Form/Radio` Fixed checking of radio buttons
- `Form/Switch` Fixed behaviour of switch


## [1.0.1-16] - 2018-07-02
### Added
- `Alert`
- `Avatar`
- `Badge`
- `Button`
- `ButtonGroup`
- `Calendar`
- `Card`
- `Contact`
- `Content`
- `FlyoutButton`
- `Footer`
- `Form`
- `Form/Checkbox`
- `Form/Datepicker`
- `Form/Fieldset`
- `Form/InputLabel`
- `Form/Radio`
- `Form/Select`
- `Form/Textarea`
- `Form/TextField`
- `Form/Switch`
- `Header`
- `Hero`
- `Icon`
- `Label`
- `Slider`
- `Spinner`
- `Steps`
- `TagList`
- `UserMenu`
