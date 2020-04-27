```js
const options = [
    {
        label: 'Antwerpen',
        value: 'BEANR'
    },
    {
        label: 'Houston',
        value: 'USHOU'
    },
    {
        label: 'Rotterdam',
        value: 'NLRTM'
    }
];
<MultiSelect options={options}/>
```

```js
const asyncOptions = (inputValue) =>  {
    return Promise.resolve([
        {
            label: 'Zuid Afrika',
            value: 'ZADUR'
        },
        {
            label: 'Hamburg',
            value: 'DEHAM'
        },
        {
            label: 'Lissabon',
            value: 'PTLIS'
        }
    ].filter(item => item.label.indexOf(inputValue) > -1));
}
<MultiSelect asyncOptions={asyncOptions}/>
```
