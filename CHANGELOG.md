# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/),
and this project adheres to [Semantic Versioning](https://semver.org/).

## [Unreleased]
### Added
- Added select disabled state
- `Select` add type

### Fixed
- `Textarea` Fixed an issue where required property was not being passed properly
- `AccordeonTab` Added an option to pass a custom toggle function so that state can be managed in parent components.


## v4.5.0 - 03-09-2020

### Added
- `Autocomplete` Added an option to define the position of the flyout menu position for the Autocomplete component
- `UserMenu` Added an option to hide the default external links

### Fixed
- `Autocomplete` Fixed an issue where re-entering the autocomplete field would trigger an async search with empty query
- `Autocomplete` Fixed an issue where debounce was using old query values


## v4.4.0 - 27-07-2020

### Fixed
- `Autocomplete` Put back the mapping on defaultValue -> Labels
- `Autocomplete` Support for defaultValue

### Added
- `Autocomplete` Support for unknown values


## v4.3.0 - 02-06-2020

### Added
- `Form` Added small and large variants to form fields


## v4.2.0 - 25-05-2020

### Added
- `Autocomplete` Added an option for multiple selection


## v4.1.0 - 28-04-2020

### Changed
- `Form/Checkbox` Allow for passing a reactive handler to the checkbox input

### Fixed
- `Modal` Fixed modal styling issues


## v4.0.0 - 04-02-2020

### Added
- `Icon` [BREAKING] Changed all `<i>` references to `<span>`
- `Pagination` [BREAKING] Changed API in order to disallow buttons.
- `Slider` [BREAKING] Changed the way units are displayed.
- `Slider/Handle` [BREAKING] Added keyboard navigation for slider.
- `Alert` Added `aria-label`.
- `Autocomplete` Added the option to disable autocomplete
- `Autocomplete` Added support for loading state
- `Autocomplete` Added support for disabled state
- `Autocomplete` Added support for handling autocomplete close
- `Autocomplete` Added support for error states
- `Avatar` Added `u-screen-reader-only` 'User Icon' info.
- `Avatar` Added option for className
- `Badge` Added `aria-label` and `title`.
- `Button` Added `aria-label`.
- `Button` Added support for --default
- `Button` Added contrast warning for negative toggle. [WCAG 2.1 AA - Contrast](https://www.w3.org/TR/WCAG21/#contrast-minimum)
- `ButtonGroup` Added option for vertical button group (depends on core branding 3.2)
- `Calendar` Added `aria-label` for navigation.
- `Card/CardIcon` Added `aria-label`.
- `Flyout` Added `aria-label` for toggle.
- `Flyout` Added an option to handle state change
- `Flyout` Added support for outside close actions
- `FlyoutButton` Added `aria-label` for toggle.
- `Form/Datepicker` Added an option to set locale
- `Form/Select` Added support for defaultValue on select
- `Form/Select` Added support for loading state
- `Form/TextField` Added disabled option
- `Form/TextField` Added support for left and right icon
- `Icon` Added `aria-label`.
- `Pagination` Added `aria-label`.
- `Slider` Added `aria-label`.
- `Spinner` Added `aria-label`.
- `Steps` Added `aria-label` and screen-reader info.
- `SubFooter` Added `title` and `aria-label` to subfooter.
- `Switch` Added `role` and `aria-checked`.
- `Tabs` Added screen-reader info.
- `Tag`/`TagListItem` Added extra WCAG information for `aria-label`.
- `Toggle` Added `role` and `aria-checked`.
- `UserMenu` Added `aria-label` and screen-reader info.

### Changed
- `Form/TextField` Improved the visibility of the description field
- `Modal` Updated design of the modal
- `UserMenu` Updated design of the user menu.

### Fixed
- `Autocomplete` Removed console log
- `Autocomplete` Took propegation delay into account when triggering search from componentWillReceiveProps
- `Flyout` Handled outside click state better
- `Form/Checkbox` Fixed checking of checkboxes.
- `Form/Checkbox` Fixed required label on checkboxes.
- `Form/Datepicker` Fixed an issue where the datepicker spams console when it is not loaded correctly
- `Form/Radio` Fixed checking of radio buttons.
- `Form/Switch` Fixed behaviour of switch.
- `TextField` Fixed console errors.
- `Button` Fixed an unnecessary class in some cases.
- `Button` Fixed transparant status.
- `Footer` Fixed scroll to top.
- `Autocomplete` Fixed items not updating when searching, added defaultValue option, added empty state, fixed open state issue.
- `Autocomplete` Fixed handling dynamic values for defaultValue.



## v1.0.1-16 - 2018-07-02
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
