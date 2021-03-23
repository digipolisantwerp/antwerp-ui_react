### Success
```
import Icon from '../icon/src/Icon';

<Alert
  type="success"
  title="This is a success box!"
  onClose={() => console.log('closed')}
  closable={true}>
  This is my child <Icon name="test3" style={{stroke:'green'}} />
  </Alert>
```

```
import Icon from '../icon/src/Icon';

<Alert
  type="warning"
  title="This is a warning box!"
  closable={true}>
  This is my child <Icon name="alert-triangle" />
  </Alert>
```
