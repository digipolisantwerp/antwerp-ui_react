### Calendar
```
const Calendar = require('./src/Calendar').default;
<Calendar 
    activeDate={new Date()} 
    label={"Startdatum"}  
    format={"DD-MM-YYYY"} 
    onChange={(date) => console.log('date is ' + date)}
    isCalendarOpen={true} />
```