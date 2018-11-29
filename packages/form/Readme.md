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
    onChange={(value) => console.log('textfield value is ' + value)} />
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
    onChange={(value) => console.log('textarea value is ' + value)} />
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
    onChange={(value) => console.log('textarea value is ' + value)} />
```

### Checkbox
```
const Checkbox = require('./src').Checkbox;

<Checkbox
    label={"Verklaard en goedgekeurd"}
    id={"checkbox-id"}
    name={"checkbox-name"}
    className={"checkbox-class"}
    required={true}
    checked={true}
    onChange={(value) => console.log('select value is ' + value)} />
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
        value:'5-7 jaar',
        label: '5-7 jaar',
    },
    {
        key: '2',
        value: '7-10 jaar',
        label: '7-10 jaar',
    },
    {
        key: '3',
        value: '10-12 jaar',
        label: '10-12 jaar',
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
    onChange={(value) => console.log('select value is ' + value)} >
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
<Select label="District"
    id={"select-id"}
    label={"Districten"}
    name={"select-name"}
    className={"select-class"}
    required={true}
    inline={false}
    placeholder={"----Select-----"}
    options={optionsDistrict}
    onChange={(value) => console.log('select value is ' + value)}
/>
```


### Datepicker

```
const Datepicker = require('./src').Datepicker;

<div>
<Datepicker
    id={"datepicker-id"}
    name={"datepicker-name"}
    label={"Geboortedatum"}
    activeDate={"20/03/1992"}
    minDate={"04/01/1992"}
    maxDate={"06/05/1992"}
    onChange={(date) => console.log('date is ' + date)}
    format={"DD/MM/YYYY"}
    open={false}
    autoClose={true} />
</div>

```
