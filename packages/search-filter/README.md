```js
const choices = [
    {
        label: "A",
        value: "a"
    },
    {
        label: "B",
        value: "b"
    }
];
const translations = {
    btnOpen: 'Find stuff'
};
<SearchFilter choices={choices} onSelection={s => console.log(s)} translations={translations}/>
```
