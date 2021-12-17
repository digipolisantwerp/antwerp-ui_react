```
<Calendar
    locale={"nl"}
    format={"DD/MM/YYYY"}
    onChange={(date) => console.log('date is ' + date)}
/>
```

If you want to use another locale (like e.g. Dutch) you have to manually import it. You can also choose to load more locales and define the right one via the `locale` prop. If no locales are defined React will fall back to English.

```js static
import 'moment/locale/nl';
```
