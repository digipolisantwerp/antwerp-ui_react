The last item in the list will be rendered without a link.

```js
<Breadcrumbs
  items={[
    { name: "Organisms", target: "/organisms" },
    { name: "Molecules", target: "/molecules" },
    { name: "Atoms", target: "/atoms" },
    { name: "Quarks", target: "/quarks" }
  ]}
/>
```

You may also specify an `onClick` callback instead of a target. The callback will get called when clicking on the link.

```js
<Breadcrumbs
  items={[
    { name: "Organisms", onClick: function() { console.log('Organisms')} },
    { name: "Molecules", onClick: function() { console.log('Molecules')} },
    { name: "Atoms", onClick: function() { console.log('Atoms')} },
    { name: "Quarks", target: "/quarks" }
  ]}
/>
```

Any items that are passed without a `target`-property will also be rendered without a link.

```js
<Breadcrumbs
  items={[
    { name: "Organisms", target: "/organisms" },
    { name: "Molecules" },
    { name: "Atoms" },
    { name: "Quarks" }
  ]}
/>
```


There is also the option to pass a custom link-component to override the default tag (`<a>`).  
This could be useful if you implement a routing framework (<a href="https://reacttraining.com/react-router">like React Router</a>).  
The `linkProps`-property accepts a function that can be used to add additional props to the custom link-component.

```js static
import { Link } from 'react-router-dom';

<Breadcrumbs
  items={[
    { name: "Organisms", target: "/organisms" },
    { name: "Molecules", target: "/molecules" },
    { name: "Atoms", target: "/atoms" },
    { name: "Quarks", target: "/quarks" }
  ]}
  linkProps={(props) => ({...props, component: Link, extraProp: "hello" }) }
/>
```
