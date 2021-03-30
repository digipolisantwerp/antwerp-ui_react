# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/),
and this project adheres to [Semantic Versioning](https://semver.org/).

## [Unreleased]


## v5.0.6 - 30-03-2021

### Fixed
- `Autocomplete` Fixed styling not being included in the build


## v5.0.5 - 22-03-2021

### Fixed
- `Autocomplete` Fixed a missing `FlyoutContent` import
- `Autocomplete` Fixed component not showing in styleguide


## v5.0.4 - 16-03-2021

### Fixed
- `Toggle` Final fix for the toggle's mixed checked state
- Optimized published package size


## v5.0.3 - 11-03-2021

### Fixed
- Fixed styleguide which was showing too many (sub) components
- `Autocomplete` Fixed state error
- `Footer` Fixed double package name for SubFooter
- `Form/TelephoneNumber` Fixed minor styling issues
- `Form/TextField` Fixed an issue with class names
- `Handle` Replaced deprecated componentWillReceiveProps
- `Toggle` Fixed an issue where the toggle's checked state could still get mixed up

### Changed
- Upgraded to the latest core branding (v4.3.1)
- Updated Styleguidist
- `Form/Select` Improved inner workings
- `Form/TelephoneNumber` Fixed minor styling issues


## v5.0.2 - 23-02-2021

### Fixed
- `Form/TelephoneNumber` Fix infinite loop when setting initialValue


## v5.0.1 - 19-02-2021

### Fixed
- `Form/TelephoneNumber` Fix border & spacing


## v5.0.0 - 19-02-2021

### Changed
- `Input` [BREAKING] We had to change the input's API to make it more consistent. This means that for some components 'type' had to be changed to 'size', in order to also support the standard 'type' attribute.

### Added
- `Form/TelephoneNumber` Added new telephone number component


## v4.9.0 - 18-02-2021

### Added
- `Form/TextField` Support addons (addon-left, addon-right)
- `Form/TextField` Pass type prop to child input
- `Form/TextField` Allow for setting className on wrapper

### Fixed
- `Autocomplete` Fixed a bug where search results were not correctly parsed
- `Toggle` Fixed an issue where the toggle's checked state could get mixed up


## v4.8.2 - 11-12-2020

### Fixed
- `Form/Datepicker` Fixed order of the week days
- `Form/TextField` Fixed ability to pass unexpected props
- `General` Fixed changelog


## v4.8.1 - 25-11-2020

### Fixed
- `Autocomplete` Fixed an issue with tabIndex


## v4.8.0 - 20-11-2020

### Added
- `RadioGroup` Added support for RadioOption key attribute
- `RadioGroup` Added support for multiple radiogroups with same values

### Fixed
- `Pagination` Fixed Pagination not rerendering when `itemsPerPage` or `totalValues` change
- `Autocomplete` Fixed an issue where an item sometimes wasn't selected
- `Autocomplete` Improved overall accessibility


## v4.7.0 - 05-10-2020

### Added
- `Textarea` Added an option to pass `onInvalidCapture` as an attribute.
- `TextField` Added support for colored description based on the state of the TextField

### Fixed
- `Checkbox` Use checked instead of defaultChecked


## v4.6.1 - 22-09-2020

### Fixed
- `Textarea` Fixed unit tests
- `Switch` Fixed unit tests
- `Switch` Fixed updating inner state on props change
- `Autocomplete` Fixed a crash when a non-existing defaultValue is provided
- `Autocomplete` Fixed an issue where the correct value wasn't selected in combination single select and sync search mode
- `Autocomplete` Fixed disappearing elements after selecting item synchronously and clearing field


## v4.6.0 - 16-09-2020

### Added
- `Autocomplete` Added support for `placeholder` and `required` attributes
- `Select` Added support for `disabled` attribute
- `Select` Added option to define size

### Fixed
- `Textarea` Fixed an issue where `required` attribute was not being passed properly
- `AccordeonTab` Added an option to pass a custom toggle function so that state can be managed in parent components
- `Select` Fix select elements must be either controlled or uncontrolled react warning
- `Autocomplete` component now can handle default values when using async loading items


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
