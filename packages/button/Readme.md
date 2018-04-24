### Button types

```
<Button type="primary">Primary</Button>{' '}
<Button type="secondary">Secondary</Button>{' '}
<Button type="success">Success</Button>{' '}
<Button type="warning">Warning</Button>{' '}
<Button type="danger">Danger</Button>{' '}
```

### Button modifiers
```
<Button type="warning" transparent>Transparent</Button>{' '}
<Button type="primary" negative>Negative</Button>{' '}
<Button type="primary" outline>Outline</Button>
```

### Button sizes
```
<Button type="primary" size="tiny">Tiny</Button>{' '}
<Button type="primary" size="small">Small</Button>{' '}
<Button type="primary" size="large">Large</Button>
```

### Full width (block) button
```
<Button type="primary" block>Block</Button>
```

### Icon buttons
```

<Button iconLeft="arrow-left" type="primary" size="large">Icon left</Button>{' '}
<Button iconLeft="arrow-left" type="primary">Icon left</Button>{' '}
<Button iconLeft="arrow-left" type="primary" size="small">Icon left</Button>{' '}
<Button iconLeft="arrow-left" type="primary" size="tiny">Icon left</Button>
<br /><br/>
<Button iconRight="arrow-right" type="primary" size="large">Icon right</Button>{' '}
<Button iconRight="arrow-right" type="primary">Icon right</Button>{' '}
<Button iconRight="arrow-right" type="primary" size="small">Icon right</Button>{' '}
<Button iconRight="arrow-right" type="primary" size="tiny">Icon right</Button>
<br /><br />
<Button icon="download" type="primary" size="large"></Button>{' '}
<Button icon="download" type="primary"></Button>{' '}
<Button icon="download" type="primary" size="small"></Button>{' '}
<Button icon="download" type="primary" size="tiny"></Button>
```

### Button Group
```
const ButtonGroup = require('./dist').ButtonGroup;
<ButtonGroup>
  <Button type="primary" size="tiny">left</Button>
  <Button type="primary" size="tiny">middle</Button>
  <Button type="primary" size="tiny">right</Button>
</ButtonGroup>
```