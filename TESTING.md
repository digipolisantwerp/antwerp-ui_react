# Antwerp UI Testing Guide

When developing, testing is a major part of the work.
We use [Jest](https://jestjs.io) in combination with [Enzyme](https://airbnb.io/enzyme) as our test suite.

To make life easier in Visual Studio Code for testing with Jest, we suggest that you install [this VS Code Jest extension](https://github.com/jest-community/vscode-jest).

## Antwerp UI Test Automation Guide

When automating tests, one of the challenges is to keep the test resilient to code changes.
Using [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) can help you with that, by creating unique selectors for your tests.

### Using unique data attributes with Antwerp UI

It's not possible to add unique attributes to the Antwerp UI components for the simple reason that the attribute won't be unique anymore when you use the component multiple times on the same page.

We solve this problem by adding unique attributes to the individual Antwerp UI components at app level.

#### Example

The following example shows the Antwerp UI Accordion with the unique `qa` data attribute `id-1234`.

```html
<Accordion qa="id-1234"/>
    <AccordionTab />
    <AccordionTab />
</Accordion>
```

Which will result in:

```html
<div class="m-accordion" data-qa="id-1234">
  ...
</div>
```

### Targeting nested elements

If you want to target a specific element within the component, use their CSS class in combination with the unique data attribute of the parent component.

#### Example

In the following example the accordion tab can be opened or closed by toggling the `<div>` tag with the CSS class `m-accordion__tab`, which is nested in the accordion with data attribute `data-qa="id-1234"`.
So the compiled code would look like this:

```html
<div class="m-accordion" data-qa="id-1234">
  <div ... class="m-accordion__tab">
  ...
</div>
```

### Overview

To help you locate a specific element of a component, we've made an overview of all Antwerp UI components and the CSS classes they use. When an element doesn't have a class set, you can still target it by selecting the element type or its custom attribute.

| Component | Class | Element / Attribute | Description |
| --------  | ----- | ------- | ----------- |
| [Accordion](https://digipolisantwerp.github.io/antwerp-ui_react/#accordion) | `m-accordion` | div | accordion wrapper |
| | `m-accordion__tab` | > div role="button" | open/close toggle |
| | `m-accordion__header` | > div | header of the accordion tab |
| | `m-accordion__content` | > div | content of the accordion tab |
| [Alert](https://digipolisantwerp.github.io/antwerp-ui_react/#alert) | `m-alert` | div | alert wrapper |
| | `m-alert__close` | > button | close button |
| | `m-alert__actions` | > div | action buttons wrapper |
| [Autocomplete](https://digipolisantwerp.github.io/antwerp-ui_react/#autocomplete) | `a-input` | input | text input field |
| | `m-selectable-list` | ul | selectable list |
| | `m-selectable-list__item` | > li | selectable list item |
| [Avatar](https://digipolisantwerp.github.io/antwerp-ui_react/#avatar) | `a-avatar` | div | avatar wrapper |
| [Badge](https://digipolisantwerp.github.io/antwerp-ui_react/#badge) | `a-badge` | span | badge |
| [Breadcrumbs](https://digipolisantwerp.github.io/antwerp-ui_react/#breadcrumbs) | `m-breadcrumbs` | ul | breadcrumbs wrapper |
| | *no classname* | > li | breadcrumb item |
| [Button](https://digipolisantwerp.github.io/antwerp-ui_react/#button) | `a-button` | button | button |
| [Calendar](https://digipolisantwerp.github.io/antwerp-ui_react/#calendar) | `m-datepicker` | div | calendar wrapper |
| | `m-datepicker__nav` | div | navigation bar |
| | `fa-angle-left` | > button > i | previous |
| | `fa-angle-right` | > button > i | next |
| | `m-datepicker__title` | > button | view toggle |
| | `m-datepicker__calendar` | tbody | calendar field |
| | *no classname* | > td > button | calendar element, depending on the selected view: day, month, year |
| [Card](https://digipolisantwerp.github.io/antwerp-ui_react/#card) | `m-card` | div | card wrapper |
| | `m-card__header` | > div | header of the card |
| | `m-card__image` | > div | image of the card |
| | `m-card__body` | > div | body of the card |
| [Contact](https://digipolisantwerp.github.io/antwerp-ui_react/#contact) | `m-contact` | div | contact wrapper |
| | `a-avatar` | > div | avatar of the contact |
| | `m-contact__info` | > div | contactinfo |
| [Flyout](https://digipolisantwerp.github.io/antwerp-ui_react/#flyout) | `m-flyout` | div | flyout wrapper |
| | *no classname* | > button | open/close toggle |
| | `m-flyout__content` | content | content of the flyout |
| [Footer](https://digipolisantwerp.github.io/antwerp-ui_react/#footer) | `o-footer` | footer | footer wrapper |
| [Form - TextField](https://digipolisantwerp.github.io/antwerp-ui_react/#form) | `a-input` | div | text field wrapper |
| | `a-input__label` | > label | input label |
| | *no classname* | > input | input field |
| [Form - Textarea](https://digipolisantwerp.github.io/antwerp-ui_react/#form) | `a-input` | div | textarea wrapper |
| | `a-input__label` | > label | input label |
| | *no classname* | > textarea | input field |
| [Form - Checkbox](https://digipolisantwerp.github.io/antwerp-ui_react/#form) | `a-input__checkbox` | div | checkbox wrapper |
| | `a-input__label` | > label | input label |
| | *no classname* | > input | input field |
| [Form - Radio](https://digipolisantwerp.github.io/antwerp-ui_react/#form) | `a-input__radio` | div | radio wrapper |
| | *no classname* | > label | input label |
| | *no classname* | > input | input field |
| [Form - Select](https://digipolisantwerp.github.io/antwerp-ui_react/#form) | `a-input` | div | select wrapper |
| | `a-input__label` | > label | input label |
| | *no classname* | > > select | selectlist |
| [Form - Datepicker](https://digipolisantwerp.github.io/antwerp-ui_react/#form) | `a-input` | div | datepicker wrapper |
| | `a-input__label` | > label | input label |
| | *no classname* | > > input | input field |
| [Header](https://digipolisantwerp.github.io/antwerp-ui_react/#header) | `o-header` | header | header wrapper |
| | `o-header__menu-items` | > div | header element wrapper |
| | `o-header__menu-item` | > > div | header element |
| [Hero](https://digipolisantwerp.github.io/antwerp-ui_react/#hero) | `u-wrapper` | div | hero wrapper |
| | `u-container` | div | content of the hero |
| [Icon](https://digipolisantwerp.github.io/antwerp-ui_react/#icon) | `fa` | span | icon wrapper |
| [Label](https://digipolisantwerp.github.io/antwerp-ui_react/#label) | `a-label` | span | label wrapper |
| [Link](https://digipolisantwerp.github.io/antwerp-ui_react/#link) | *no classname* | a | link |
| [Modal](https://digipolisantwerp.github.io/antwerp-ui_react/#modal) | `m-overlay` | div | overlay |
| | `m-modal` | > div | modal |
| | `m-modal__content` | > > div | modal |
| | `m-modal__header` | > > div | modal header wrapper |
| | `m-modal__close` | > > > button | close button |
| | `m-modal__footer` | > > > div | modal footer wrapper |
| | *no classname*  | > > > > button | modal action button(s) |
| [Pagination](https://digipolisantwerp.github.io/antwerp-ui_react/#pagination) | `m-pagination` | ul | pagination wrapper |
| | `m-pagination__prev` | > li | element to previous page|
| | `m-pagination__next` | > li | element to next page |
| [Slider](https://digipolisantwerp.github.io/antwerp-ui_react/#slider) | `m-range-slider__inner` | div | range slider selection wrapper |
| | `m-range-slider__bar` | > div | range slider selection bar |
| | `m-range-slider__handle` | > span | range slider selection button |
| [Spinner](https://digipolisantwerp.github.io/antwerp-ui_react/#spinner) | `a-spinner` | div | spinner |
| [Steps](https://digipolisantwerp.github.io/antwerp-ui_react/#steps) | `m-step-indicator` | ol | steps wrapper |
| | `m-step-indicator__label` | > > span | step indicator label |
| [SubFooter](https://digipolisantwerp.github.io/antwerp-ui_react/#subfooter) | `o-footer` | > div | subfooter wrapper |
| [Switch](https://digipolisantwerp.github.io/antwerp-ui_react/#switch) | `a-switch` | div | switch wrapper |
| | `a-input__label` | > label | on or off label |
| | `a-switch__toggle` | > div | switch toggle |
| | *no classname* | > > input | input checkbox |
| [Tabs](https://digipolisantwerp.github.io/antwerp-ui_react/#tabs) | `m-nav-tabs` | ul | tabs wrapper |
| | *no classname* | > li | tab |
| [TagList](https://digipolisantwerp.github.io/antwerp-ui_react/#taglist) | `o-tag-list` | ul | tags wrapper |
| | `m-tag` | > li | tag |
| | `m-tag__label` | > > span | tag label |
| [UserMenu](https://digipolisantwerp.github.io/antwerp-ui_react/#usermenu) | `m-flyout` | div | user menu wrapper |
| | `btn-user-flyout` | > > button | user menu toggle |
| | `m-flyout__content` | > button | content of the user menu |
| | `avatar-wrapper` | > > > button | user menu avatar |
| | `m-nav-list` | > > > ul | user menu list |
| | *no classname* | > > > > li | user menu list item |
| | `btn-logout` | > > > button | user menu log out button |
