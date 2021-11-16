- `onClick` will pass the element that was clicked
- `onChecked` will pass `true` of `false` based on if the checkbox is checked

```
<Switch
  label={"Declared and approved"}
  id={"switch-id"}
  name={"switch-name"}
  className={"switch-class"}
  required={true}
  disabled={false}
  checked={true}
  onClick={(value) => console.log('select value is:', value)}
  onChecked={(value) => console.log('checked value is:', value)} />
```
