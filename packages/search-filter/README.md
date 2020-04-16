```js
const choices = [
{
label : "N36 Grade Magnet",
value: 'n36'
},
{
label: 'N48 Grade Magnet',
value: 'n48'
},
{
label: 'N52 Grade Magnet',
value: 'n52'
}
];
const translations= {
btnOpen: 'Find Stuff'
};
<SearchFilter choices={choices} onSelection={s => console.log(s)} translations={translations}/>
```
