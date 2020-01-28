# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/),
and this project adheres to [Semantic Versioning](https://semver.org/).

## [Unreleased]

- `CardIcon` [BREAKING] Make `aria-label` required.
- `Button` [BREAKING] Make `aria-label` required.
- `Icon` [BREAKING] `<i>` is for italic, not for icons. Only `<span class="..."></span>` is allowed. [WCAG 2.1 AA - Identify purpose](https://www.w3.org/TR/WCAG21/#identify-purpose)
- `Handle` [BREAKING] Added keyboard navigation for slider.
- `Slider` [BREAKING] Changed the way units are displayed.
- `Steps` Added `aria-label` and screen-reader info.
- `Button` Fixed an unnecessary class in some cases.
- `SubFooter` Added `title` and `aria-label` to subfooter.
- `Footer` Fixed scroll to top.
- `Switch` Added `role` and `aria-checked`.
- `Toggle` Added `role` and `aria-checked`.
- `Tabs` Added screen-reader info..
- `Spinner` Added `aria-label`.
- `FlyoutButton` Added `aria-label` for toggle.
- `Flyout` Added `aria-label` for toggle.
- `Calendar` Added `aria-label` for navigation.
- `Badge` Added `aria-label` and `title`.
- `Alert` Added `aria-label`.
- `Pagination` Added `aria-label`.
- `Slider` Added `aria-label`.
- `Icon` Added `aria-label`.
- `Avatar` Added `u-screen-reader-only` 'User Icon' info.
- `Button` Added contrast warning for negative toggle. [WCAG 2.1 AA - Contrast](https://www.w3.org/TR/WCAG21/#contrast-minimum)
- `Tag`/`TagListItem` Added extra WVAG information for `aria-label`.
- `UserMenu` Added `aria-label` and screen-reader info.

- `ButtonGroup` Added option for vertical button group (depends on core branding 3.2)
- `Autocomplete` Fixed items not updating when searching, added defaultValue option, added empty state, fixed open state issue
- `Flyout` Added an option to handle state change
- `Datepicker` Fixed an issue where the datepicker spams console when it is not loaded correctly
- `TextField` Added the option to disable autocomplete
- `TextField` Added disabled option
- `Autocomplete` Removed console log
- `Autocomplete` Took propegation delay into account when triggering search from componentWillReceiveProps
- `TextField` Fixed console errors
- `TextField` Added support for left and right icon
- `TextField` Improved the visibility of the description field
- `Autocomplete` Added support for loading state
- `Autocomplete` Added support for disabled state
- `Flyout` Added support for outside close actions
- `Flyout` Handled outside click state better
- `Autocomplete` Added support for handling autocomplete close
- `Autocomplete` Added support for error states
- `Modal` Updated design of the modal
- `Button` Added support for --default
- `Button` Fixed transparant status
- `Select` Added support for loading state
- `Avatar` Added option for className
- `Autocomplete` Fixed handling dynamic values for defaultValue

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
