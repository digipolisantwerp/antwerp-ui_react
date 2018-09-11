Various alignment options are available for the tabs. (defaults to `"left"`)  
Tabs can be marked active with the `active`-property.  
Tabs can be marked disabled with the `disabled`-property.  

```js
<Tabs
  align="left"
  items={[
    { name: "Organisms", target: "/organisms", active: true },
    { name: "Molecules", target: "/molecules" },
    { name: "Atoms", target: "/atoms", disabled: true },
    { name: "Quarks", target: "/quarks" }
  ]}
/>
```

```js
<Tabs
  align="center"
  items={[
    { name: "Organisms", target: "/organisms", active: true },
    { name: "Molecules", target: "/molecules" },
    { name: "Atoms", target: "/atoms", disabled: true },
    { name: "Quarks", target: "/quarks" }
  ]}
/>
```

```js
<Tabs
  align="right"
  items={[
    { name: "Organisms", target: "/organisms", active: true },
    { name: "Molecules", target: "/molecules" },
    { name: "Atoms", target: "/atoms", disabled: true },
    { name: "Quarks", target: "/quarks" }
  ]}
/>
```

There is also the option to pass a custom link-component to override the default tag (`<a>`).  
This could be useful if you implement a routing framework (<a href="https://reacttraining.com/react-router">like React Router</a>).  
The `linkProps`-property accepts a function that can be used to add additional props to the custom link-component.

```js static
import { Link } from 'react-router-dom';

<Tabs
  items={[
    { name: "Organisms", target: "/organisms", active: true },
    { name: "Molecules", target: "/molecules" },
    { name: "Atoms", target: "/atoms", disabled: true },
    { name: "Quarks", target: "/quarks" }
  ]}
  linkProps={(props) => ({...props, component: Link, extraProp: "hello" }) }
/>
```
