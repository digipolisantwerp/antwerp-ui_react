<div class="m-alert d-alert m-alert--wcag u-margin-bottom">
  <p>It is important to provide the user with clean instructions on how to complete the form. You can provide these both overall or inline. Note that you can not use the placeholder attribute as a replacement for clean instructions or for the label.</p>
</div>

### TextField
```
const TextField = require('./src').TextField;

<TextField
  label={"Name"}
  id={"textfield-id-1"}
  name={"textfield-name"}
  className={"textfield-class"}
  required={true}
  placeholder={"Your name"}
  onChange={(value) => console.log('textfield value is:', value)} />
```

The prop `autoComplete` can be used to disable the prefill that some browsers show
```
const TextField = require('./src').TextField;

<TextField
  label={"Name"}
  id={"textfield-id-2"}
  name={"textfield-name"}
  className={"textfield-class"}
  required={true}
  placeholder={"Your name"}
  onChange={(value) => console.log('textfield value is:', value)}
  autoComplete="off" />
```

Use `iconright` or `iconleft` to add an icon respectively right or left
```
const TextField = require('./src').TextField;

<div>
<TextField
  label={"Name"}
  id={"textfield-id-3"}
  name={"textfield-name"}
  className={"textfield-class"}
  required={true}
  placeholder={"Your name"}
  onChange={(value) => console.log('textfield value is:', value)}
  iconright="eye" />

<br />

<TextField
  label={"Name"}
  id={"textfield-id-4"}
  name={"textfield-name"}
  className={"textfield-class"}
  required={true}
  placeholder={"Your name"}
  onChange={(value) => console.log('textfield value is:', value)}
  iconleft="user" />
</div>
```

A spinner can be added using the `spinner` prop
```
const TextField = require('./src').TextField;

<TextField
  label={"Name"}
  id={"textfield-id-5"}
  name={"textfield-name"}
  className={"textfield-class"}
  required={true}
  placeholder={"Your name"}
  onChange={(value) => console.log('textfield value is:', value)}
  loading={true} />
```

The text field can be disabled using the `disabled` prop
```
const TextField = require('./src').TextField;

<TextField
  label={"Name"}
  id={"textfield-id-6"}
  name={"textfield-name"}
  className={"textfield-class"}
  required={true}
  placeholder={"Your name"}
  onChange={(value) => console.log('textfield value is:', value)}
  disabled />
```

The text field can be small using the `style` prop
```
const TextField = require('./src').TextField;

<TextField
  label={"Name"}
  id={"textfield-id-6"}
  name={"textfield-name"}
  className={"textfield-class"}
  required={true}
  placeholder={"Your name"}
  onChange={(value) => console.log('textfield value is:', value)}
  type="small" />
```
```
const TextField = require('./src').TextField;

<TextField
  label={"Name"}
  id={"textfield-id-6"}
  name={"textfield-name"}
  className={"textfield-class"}
  required={true}
  placeholder={"Your name"}
  onChange={(value) => console.log('textfield value is:', value)}
  type="large" />
```

### Textarea
```
const Textarea = require('./src').Textarea;

<Textarea
  label={"Description"}
  id={"textarea-1"}
  name={"textarea-name"}
  className={"textarea-class"}
  required={true}
  placeholder={"Give a description"}
  onChange={(value) => console.log('textarea value is:', value)} />
```

```
const Textarea = require('./src').Textarea;

<Textarea
  label={"Description"}
  id={"textarea-2"}
  name={"textarea-name"}
  className={"textarea-class"}
  required={true}
  placeholder={"Give a description"}
  disabled
  onChange={(value) => console.log('textarea value is:', value)} />
```

Small variant:
```
const Textarea = require('./src').Textarea;

<Textarea
  label={"Description"}
  id={"textarea-2"}
  name={"textarea-name"}
  className={"textarea-class"}
  required={true}
  placeholder={"Give a description"}
  type="small"
  onChange={(value) => console.log('textarea value is:', value)} />
```

Large variant:
```
const Textarea = require('./src').Textarea;

<Textarea
  label={"Description"}
  id={"textarea-2"}
  name={"textarea-name"}
  className={"textarea-class"}
  required={true}
  placeholder={"Give a description"}
  type="large"
  onChange={(value) => console.log('textarea value is:', value)} />
```


### Checkbox
```
const Checkbox = require('./src').Checkbox;

<Checkbox
  label={"Declared and approved"}
  id={"checkbox-id"}
  name={"checkbox-name"}
  className={"checkbox-class"}
  required={true}
  onChange={(value) => console.log('checkbox value is:', value)} />
```

### Radio
```
const RadioGroup = require('./src').RadioGroup;
const Radio = require('./src').Radio;

const optionsAges = [
  {
    key: '0',
    value: '1-5 years',
    label: '1-5 years',
  },
  {
    key: '1',
    value:'6-7 years',
    label: '6-7 years',
  },
  {
    key: '2',
    value: '8-10 years',
    label: '8-10 years',
  },
  {
    key: '3',
    value: '11-12 years',
    label: '11-12 years',
  }
];

<RadioGroup
  id={"radio-id"}
  label={"Ages"}
  name={"radio-name"}
  className={"radio-class"}
  required={true}
  inline={false}
  options={optionsAges}
  value={"8-10 years"}
  onChange={(value) => console.log('radiogroup value is:', value)} >
</RadioGroup>
```

### Select
```
const Select = require('./src').Select;
const optionsDistrict = [
  {
    key: '0',
    value: '2100 Deurne',
    label: '2100 Deurne',
  },
  {
    key: '1',
    value: '2030 Antwerpen',
    label: '2030 Antwerpen',
  },
  {
    key: '2',
    value: '2200 Merksem',
    label: '2200 Merksem',
  },
  {
    key: '3',
    value: '2040 Brasschaat',
    label: '2040 Brasschaat',
  }
];

<div>
  <Select label="District"
    id={"select-1"}
    label={"Districts"}
    name={"select-name"}
    className={"select-class"}
    required={true}
    inline={false}
    placeholder={"Choose a district"}
    options={optionsDistrict}
    onChange={(value) => console.log('select value is:', value)}
  />

  <br />

  <Select label="District"
    id={"select-2"}
    label={"Districts loading"}
    name={"select-name"}
    className={"select-class u-margin-top"}
    required={true}
    inline={false}
    placeholder={"Choose a district"}
    options={optionsDistrict}
    loading={true}
    onChange={(value) => console.log('select value is:', value)}
  />
</div>
```

Small variant:
```
const Select = require('./src').Select;
const optionsDistrict = [
  {
    key: '0',
    value: '2100 Deurne',
    label: '2100 Deurne',
  },
  {
    key: '1',
    value: '2030 Antwerpen',
    label: '2030 Antwerpen',
  },
  {
    key: '2',
    value: '2200 Merksem',
    label: '2200 Merksem',
  },
  {
    key: '3',
    value: '2040 Brasschaat',
    label: '2040 Brasschaat',
  }
];

<Select label="District"
  id={"select-1"}
  label={"Districts"}
  name={"select-name"}
  className={"select-class"}
  required={true}
  inline={false}
  placeholder={"Choose a district"}
  options={optionsDistrict}
  type="small"
  onChange={(value) => console.log('select value is:', value)}
/>
```

Large variant:
```
const Select = require('./src').Select;
const optionsDistrict = [
  {
    key: '0',
    value: '2100 Deurne',
    label: '2100 Deurne',
  },
  {
    key: '1',
    value: '2030 Antwerpen',
    label: '2030 Antwerpen',
  },
  {
    key: '2',
    value: '2200 Merksem',
    label: '2200 Merksem',
  },
  {
    key: '3',
    value: '2040 Brasschaat',
    label: '2040 Brasschaat',
  }
];

<Select label="District"
  id={"select-1"}
  label={"Districts"}
  name={"select-name"}
  className={"select-class"}
  required={true}
  inline={false}
  placeholder={"Choose a district"}
  options={optionsDistrict}
  type="large"
  onChange={(value) => console.log('select value is:', value)}
/>
```

Disabled variant:
```
const Select = require('./src').Select;
const optionsDistrict = [
  {
    key: '0',
    value: '2100 Deurne',
    label: '2100 Deurne',
  },
  {
    key: '1',
    value: '2030 Antwerpen',
    label: '2030 Antwerpen',
  },
  {
    key: '2',
    value: '2200 Merksem',
    label: '2200 Merksem',
  },
  {
    key: '3',
    value: '2040 Brasschaat',
    label: '2040 Brasschaat',
  }
];

<Select label="District"
  id={"select-1"}
  label={"Districts"}
  name={"select-name"}
  className={"select-class"}
  required={true}
  disabled={true}
  inline={false}
  placeholder={"Choose a district"}
  options={optionsDistrict}
  onChange={(value) => console.log('select value is:', value)}
/>
```


### Datepicker

```
const Datepicker = require('./src').Datepicker;

<div>
  <Datepicker
    locale={"en"}
    id={"datepicker-id-1"}
    name={"datepicker-name"}
    label={"Datepicker with input mask"}
    format={"DD/MM/YYYY"}
    mask={"99/99/9999"}
    required={true}
    onChange={(date, isValid) => console.log('date is ' + date + ', and is valid ' + isValid)}
    //state={"error"}
    //description={[<span className="u-text-danger">Dit is geen geldige geboortedatum</span>]}
    open={false}
  />

  <br />

  <Datepicker
    locale={"en"}
    id={"datepicker-id-2"}
    name={"datepicker-name"}
    label={"Datepicker without input mask"}
    format={"DD/MM/YYYY"}
    readOnly={true}
  />
</div>

```

Small variant
```
const Datepicker = require('./src').Datepicker;

<Datepicker
  type="small"
  locale={"en"}
  id={"datepicker-id-2"}
  name={"datepicker-name"}
  label={"Datepicker without input mask and small"}
  format={"DD/MM/YYYY"}
  readOnly={true}
/>

```

Large variant
```
const Datepicker = require('./src').Datepicker;

<Datepicker
  type="large"
  locale={"en"}
  id={"datepicker-id-2"}
  name={"datepicker-name"}
  label={"Datepicker without input mask and small"}
  format={"DD/MM/YYYY"}
  readOnly={true}
/>

```
