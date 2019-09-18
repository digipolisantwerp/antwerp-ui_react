### TextField
```
const TextField = require('./src').TextField;

<TextField
    label={"Naam"}
    id={"textfield-id"}
    name={"textfield-name"}
    className={"textfield-class"}
    required={true}
    placeholder={"naam"}
    onChange={(value) => console.log('textfield value is:', value)} />
```

The prop `autoComplete` can be used to disable the prefill that some browsers show
```
const TextField = require('./src').TextField;

<TextField
    label={"Naam"}
    id={"textfield-id"}
    name={"textfield-name"}
    className={"textfield-class"}
    required={true}
    placeholder={"naam"}
    onChange={(value) => console.log('textfield value is:', value)}
    autoComplete="off" />
```

Use `iconright` or `iconleft` to add an icon respectively right or left
```
const TextField = require('./src').TextField;

<div>
<TextField
    label={"Naam"}
    id={"textfield-id"}
    name={"textfield-name"}
    className={"textfield-class"}
    required={true}
    placeholder={"naam"}
    onChange={(value) => console.log('textfield value is:', value)}
    iconright="eye" />
    
<TextField
    label={"Naam"}
    id={"textfield-id"}
    name={"textfield-name"}
    className={"textfield-class"}
    required={true}
    placeholder={"naam"}
    onChange={(value) => console.log('textfield value is:', value)}
    iconleft="user" />
</div>
```

A spinner can be added using the `spinner` prop
```
const TextField = require('./src').TextField;

<TextField
    label={"Naam"}
    id={"textfield-id"}
    name={"textfield-name"}
    className={"textfield-class"}
    required={true}
    placeholder={"naam"}
    onChange={(value) => console.log('textfield value is:', value)}
    loading={true} />
```

The text field can be disabled using the `disabled` prop
```
const TextField = require('./src').TextField;

<TextField
    label={"Naam"}
    id={"textfield-id"}
    name={"textfield-name"}
    className={"textfield-class"}
    required={true}
    placeholder={"naam"}
    onChange={(value) => console.log('textfield value is:', value)}
    disabled />
```

### Textarea
```
const Textarea = require('./src').Textarea;

<Textarea
    label={"Beschrijving"}
    id={"textarea-id"}
    name={"textarea-name"}
    className={"textarea-class"}
    required={true}
    placeholder={"beschrijving"}
    onChange={(value) => console.log('textarea value is:', value)} />
```

```
const Textarea = require('./src').Textarea;

<Textarea
    label={"Beschrijving"}
    id={"textarea-id"}
    name={"textarea-name"}
    className={"textarea-class"}
    required={true}
    placeholder={"beschrijving"}
    disabled
    onChange={(value) => console.log('textarea value is:', value)} />
```


### Checkbox
```
const Checkbox = require('./src').Checkbox;

<Checkbox
    label={"<a href='google.be'>Verklaard en goedgekeurd</a>"}
    id={"checkbox-id"}
    name={"checkbox-name"}
    className={"checkbox-class"}
    required={true}
    checked={true}
    onChange={(value) => console.log('checkbox value is:', value)} />
```

### Radio
```
const RadioGroup = require('./src').RadioGroup;
const Radio = require('./src').Radio;

const optionsAges = [
    {
        key: '0',
        value: '1-5 jaar',
        label: '1-5 jaar',
    },
    {
        key: '1',
        value:'6-7 jaar',
        label: '6-7 jaar',
    },
    {
        key: '2',
        value: '8-10 jaar',
        label: '8-10 jaar',
    },
    {
        key: '3',
        value: '11-12 jaar',
        label: '11-12 jaar',
    }
];

<RadioGroup label="District"
    id={"radio-id"}
    label={"Leeftijden"}
    name={"radio-name"}
    className={"radio-class"}
    required={true}
    inline={false}
    options={optionsAges}
    value={"8-10 jaar"}
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
        id={"select-id"}
        label={"Districten"}
        name={"select-name"}
        className={"select-class"}
        required={true}
        inline={false}
        placeholder={"----Select-----"}
        options={optionsDistrict}
        onChange={(value) => console.log('select value is:', value)}
    />
    <Select label="District"
        id={"select-id"}
        label={"Districten loading"}
        name={"select-name"}
        className={"select-class u-margin-top"}
        required={true}
        inline={false}
        placeholder={"----Select-----"}
        options={optionsDistrict}
        loading={true}
        onChange={(value) => console.log('select value is:', value)}
    />
</div>
```


### Datepicker

```
const Datepicker = require('./src').Datepicker;

<div>
<Datepicker
    id={"datepicker-id"}
    name={"datepicker-name"}
    label={"Datepicker met vrije input/mask"}
    format={"DD/MM/YYYY"}
    mask={"99/99/9999"}
    required={true}
    onChange={(date, isValid) => console.log('date is ' + date + ', and is valid ' + isValid)}
    //state={"error"}
    //description={[<span className="u-text-danger">Dit is geen geldige geboortedatum</span>]}
    open={false}
    />
    
    <Datepicker
        id={"datepicker-id"}
        name={"datepicker-name"}
        label={"Datepicker zonder vrije input/mask"}
        format={"DD/MM/YYYY"}
        readOnly={true}
        />
</div>

```
