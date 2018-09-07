```js
<Link href="/hello">Hello world</Link>
```

```js
<Link href="https://www.google.com" target="_blank">Go to google</Link>
```

There is the option to pass a custom link-component via the `component`-prop to override the default tag (`<a>`).  
This could be useful if you implement a routing framework (<a href="https://reacttraining.com/react-router">like React Router</a>).  

```js static
import { Link } from 'react-router-dom';

<Link to="/user" component={Link}>My User Profile</Link>
```

```js
<Link destination="/meow" component="span">I'm not a real link</Link>
```
