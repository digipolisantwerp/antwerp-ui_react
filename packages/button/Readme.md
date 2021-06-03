### Button types

```
<Button type="primary">Primary</Button>{' '}
<Button type="secondary">Secondary</Button>{' '}
<Button type="success">Success</Button>{' '}
<Button type="warning">Warning</Button>{' '}
<Button type="danger">Danger</Button>{' '}
<Button type="transparent">Transparent</Button>{' '}
```

### Button modifiers

```
import Icon from '../icon/src/Icon';

<div className="m-alert d-alert m-alert--wcag u-margin-bottom">
    <p>Due to [WCAG 2.1 AA](https://www.w3.org/TR/WCAG21/) compliance only `primary` and `secondary` are available in combination with `negative`.
      The fallback is `primary` for `success`, `warning` and `danger`. See the <a href="https://www.w3.org/TR/WCAG21/#contrast-minimum" title="Web Content Accessibility Guidelines (WCAG) 2.1 Success Criterion 1.4.3 Contrast (Minimum)" className="has-icon-right" target="_blank">Contrast criterion<Icon name="ai-navigation-next" ariaLabel=" (external)" /></a>.</p>
</div>
```

```
<Button type="primary" negative>Negative</Button>{' '}
<Button type="primary" outline>Outline</Button>{' '}
<Button icon="ai-close" ariaLabel="Close" transparent></Button>
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

<Button iconLeft="ai-arrow-left-1" type="primary" size="large">Icon left</Button>{' '}
<Button iconLeft="ai-arrow-left-1" type="primary">Icon left</Button>{' '}
<Button iconLeft="ai-arrow-left-1" type="primary" size="small">Icon left</Button>{' '}
<Button iconLeft="ai-arrow-left-1" type="primary" size="tiny">Icon left</Button>
<br /><br/>
<Button iconRight="ai-arrow-right-1" type="primary" size="large">Icon right</Button>{' '}
<Button iconRight="ai-arrow-right-1" type="primary">Icon right</Button>{' '}
<Button iconRight="ai-arrow-right-1" type="primary" size="small">Icon right</Button>{' '}
<Button iconRight="ai-arrow-right-1" type="primary" size="tiny">Icon right</Button>
<br /><br />
<Button icon="ai-download-bottom" ariaLabel="Download" type="primary" size="large"></Button>{' '}
<Button icon="ai-download-bottom" ariaLabel="Download" type="primary"></Button>{' '}
<Button icon="ai-download-bottom" ariaLabel="Download" type="primary" size="small"></Button>{' '}
<Button icon="ai-download-bottom" ariaLabel="Download" type="primary" size="tiny"></Button>
```

### Button Group

```
const ButtonGroup = require('.').ButtonGroup;
<div>
<ButtonGroup>
  <Button type="primary">left</Button>
  <Button type="primary">middle</Button>
  <Button type="primary">right</Button>
</ButtonGroup>
<br />
<ButtonGroup direction="vertical">
  <Button type="primary" size="tiny">left</Button>
  <Button type="primary" size="tiny">middle</Button>
  <Button type="primary" size="tiny">right</Button>
</ButtonGroup>
</div>
```
