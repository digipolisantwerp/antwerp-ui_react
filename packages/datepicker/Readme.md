### Input

```
<div>
<DatePickerInput 
    activeDate={new Date('05/05/1992')} 
    onChange={(date) => console.log('date is ' + date)}
    label={"Geboortedatum"}
    format={"DD/MM/YYYY"} 
    isCalendarOpen={true} />
</div>

```


### View
```
const DatePickerView = require('./src/DatePickerView').default;
<DatePickerView 
    activeDate={new Date()} 
    label={"Startdatum"}  
    format={"DD-MM-YYYY"} 
    onChange={(date) => console.log('date is ' + date)}
    isCalendarOpen={true} />
```