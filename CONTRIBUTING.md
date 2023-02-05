# Antwerp UI - React components - Contributing Guide

## Local setup

See [README.md](README.md).

## Branching/Pull guidelines

Here is the branching strategy for contributions:

- Always start from the active development branch (`develop-v7`) and pull latest changes.
- Branch from the active development branch and use following branch names:
  - `develop-v7/components/<COMPONENT>` to add new **components**.
  - `develop-v7/feature/<FEATURE> ` to add new **features** to existing components.
  - `develop-v7/bug/<BUG>` for **bug fixing**.
  - `develop-v7/docs/<DOCS>` to add/improve **documentation**.
- (If available) Use **Jira** ticket numbers in commits.

## Project structure

### Folder structure

- Base folder `packages/antwerp-ui/react-components`
- Playground folder `documentation/playground`
  - This is a [ViteJS](https://vitejs.dev/) React project where you can play/test the components during development.
  - Each component should have its playground code in a separate file, e.g. `documentation/playground/atoms/HelloWordExamples.tsx`.
- Storybook folder `documentation/storybook`,
  - Contains only setup/config files for the [Storybook](https://storybook.js.org/) documentation.
  - **DO NOT** put component stories in here, they belong in the main packages folder next to the corresponding component.
- General utils `packages/antwerp-ui/react-components/src/utils` (e.g. DOM Manipulation, Base rendering helpers).
- Constants `packages/antwerp-ui/react-components/src/constants`; application-wide settings and types.

### Component files

- Component folder e.g. `src/lib/atoms/hello-world` (Use _dash_ for composed names!)
  - Tests: `HelloWorld.spec.tsx`, written with [React Testing Library](https://testing-library.com/docs/dom-testing-library/intro/) and [Jest](https://jestjs.io/).
  - Docs: `HelloWorld.stories.tsx`, Storybook story, see for further information the [Storybook docs](https://storybook.js.org/docs/react/get-started/introduction).
  - Component: `HelloWorld.tsx`, contains the component (Typescript).
  - Index file: `index.ts`, exports the component and the type of its props.
  - Types file: `HelloWorld.types.ts`, export types specific for the component, most of the time the Props.

## Adding a new component

- Check if component is really necessary.
  - Does it already exist?
  - Check with "Digitale Huisstijl" before starting.
- Generate component with `yarn g`, this will create boilerplate files for the component.
- Development steps (order can vary)
  - Define your props/interface
  - Write tests
  - Write your component
  - Write documentation
  - Test component with playground examples

## Conventions

### Naming/Casing

- CamelCase for components, component tests, component stories and component styles (avoid styles!!).
  - e.g. HelloWorld.tsx, HelloWorld.spec.tsx, HelloWorld.stories.jsx and HelloWorld.types.ts.
- Lowercase with dots for other Javascript files, e.g. `dom.utils.ts`
- Component folders use dashes, e.g. `hello-world`

### Components development

- Use [React hooks](https://reactjs.org/docs/hooks-intro.html) over lifecycle methods.
- Be specific in React types ([more info](https://dev.to/fromaline/jsxelement-vs-reactelement-vs-reactnode-2mh2)), use `interface` for the public component props.
- Every component should have a `qa` prop that becomes a `data-qa` HTML attribute on the main HTML element.
- Prop names should be in line with the [Antwerp digital branding guidelines](https://digitale-huisstijl.antwerpen.be/getting-started).
- Aim for [controlled components](https://reactjs.org/docs/forms.html#controlled-components) (vs. uncontrolled).
- Components that are tied to each other can be in the same folder, e.g. `Radio` and `RadioGroup`.
- If no logic order is possible, try to order list alphabetically (e.g. multiple `import` lines, multiline props, ...)
- WCAG considerations!

### Styling

- Try to avoid custom CSS, discrepancies should flow back to the core branding.
- Don't add inline style via `style` prop.
- Use the `classNames` helper (return a class string given an object, every thruthy field of the object is incorporated in the returned string) to interfer conditional classnames.

### Testing

- Aim for **100%** coverage on tests.
- Use `jest.fn` to mock functions.
