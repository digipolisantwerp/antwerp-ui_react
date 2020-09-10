```
<Autocomplete
  items={[
    { label: "Antwerpen", value: "antwerpen"},
    { label: "Gent", value: "gent"},
    { label: "Brussel", value: "brussel"},
    { label: "Brugge", value: "brugge"},
    { label: "Hasselt", value: "hasselt"},
    { label: "Luik", value: "luik"},
    { label: "Oostende", value: "oostende"},
    { label: "Namen", value: "namen"},
    { label: "Mechelen", value: "mechelen"},
    { label: "Sint-Niklaas", value: "sint-niklaas"},
    { label: "Aalst", value: "aalst"},
    { label: "Genk", value: "genk"}
  ]}
  id="autocomplete-1"
  onSelection={(selected) => {console.log(`Selected ${selected}`)}}
  onChange={(value) => {console.log(`Typed ${value}`)}}
  showSearchIcon={true}
  label="Select a city">
</Autocomplete>
```

The prop `defaultValue` can be used to show a default value when the component gets loaded.
```
<Autocomplete
  items={[
    { label: "Antwerpen", value: "antwerpen"},
    { label: "Gent", value: "gent"},
    { label: "Brussel", value: "brussel"},
    { label: "Brugge", value: "brugge"},
    { label: "Hasselt", value: "hasselt"},
    { label: "Luik", value: "luik"},
    { label: "Oostende", value: "oostende"},
    { label: "Namen", value: "namen"},
    { label: "Mechelen", value: "mechelen"},
    { label: "Sint-Niklaas", value: "sint-niklaas"},
    { label: "Aalst", value: "aalst"},
    { label: "Genk", value: "genk"}
  ]}
  id="autocomplete-2"
  defaultValue="aalst"
  onSelection={(selected) => {console.log(`Selected ${selected}`)}}
  onChange={(value) => {console.log(`Typed ${value}`)}}
  label="Select a city">
</Autocomplete>
```

The prop `loading` can be used to show a loading indication.
```
<Autocomplete
  items={[
    { label: "Antwerpen", value: "antwerpen"},
    { label: "Gent", value: "gent"},
    { label: "Brussel", value: "brussel"},
    { label: "Brugge", value: "brugge"},
    { label: "Hasselt", value: "hasselt"},
    { label: "Luik", value: "luik"},
    { label: "Oostende", value: "oostende"},
    { label: "Namen", value: "namen"},
    { label: "Mechelen", value: "mechelen"},
    { label: "Sint-Niklaas", value: "sint-niklaas"},
    { label: "Aalst", value: "aalst"},
    { label: "Genk", value: "genk"}
  ]}
  id="autocomplete-3"
  defaultValue="gent"
  onSelection={(selected) => {console.log(`Selected ${selected}`)}}
  onChange={(value) => {console.log(`Typed ${value}`)}}
  label="Select a city"
  loading={true}>
</Autocomplete>
```

The prop `disabled` can be used to disabled the autocomplete.
```
<Autocomplete
  items={[
    { label: "Antwerpen", value: "antwerpen"},
    { label: "Gent", value: "gent"},
    { label: "Brussel", value: "brussel"},
    { label: "Brugge", value: "brugge"},
    { label: "Hasselt", value: "hasselt"},
    { label: "Luik", value: "luik"},
    { label: "Oostende", value: "oostende"},
    { label: "Namen", value: "namen"},
    { label: "Mechelen", value: "mechelen"},
    { label: "Sint-Niklaas", value: "sint-niklaas"},
    { label: "Aalst", value: "aalst"},
    { label: "Genk", value: "genk"}
  ]}
  id="autocomplete-4"
  defaultValue="brugge"
  onSelection={(selected) => {console.log(`Selected ${selected}`)}}
  onChange={(value) => {console.log(`Typed ${value}`)}}
  label="Select a city"
  disabled={true}>
</Autocomplete>
```

The prop `state` can be used to set error states
```
<div>
<Autocomplete
  items={[
    { label: "Antwerpen", value: "antwerpen"},
    { label: "Gent", value: "gent"},
    { label: "Brussel", value: "brussel"},
    { label: "Brugge", value: "brugge"},
    { label: "Hasselt", value: "hasselt"},
    { label: "Luik", value: "luik"},
    { label: "Oostende", value: "oostende"},
    { label: "Namen", value: "namen"},
    { label: "Mechelen", value: "mechelen"},
    { label: "Sint-Niklaas", value: "sint-niklaas"},
    { label: "Aalst", value: "aalst"},
    { label: "Genk", value: "genk"}
  ]}
  id="autocomplete-5"
  defaultValue="namen"
  onSelection={(selected) => {console.log(`Selected ${selected}`)}}
  onChange={(value) => {console.log(`Typed ${value}`)}}
  label="Select a city"
  state="error">
</Autocomplete>
<br />
<Autocomplete
  items={[
    { label: "Antwerpen", value: "antwerpen"},
    { label: "Gent", value: "gent"},
    { label: "Brussel", value: "brussel"},
    { label: "Brugge", value: "brugge"},
    { label: "Hasselt", value: "hasselt"},
    { label: "Luik", value: "luik"},
    { label: "Oostende", value: "oostende"},
    { label: "Namen", value: "namen"},
    { label: "Mechelen", value: "mechelen"},
    { label: "Sint-Niklaas", value: "sint-niklaas"},
    { label: "Aalst", value: "aalst"},
    { label: "Genk", value: "genk"}
  ]}
  id="autocomplete-6"
  defaultValue="mechelen"
  onSelection={(selected) => {console.log(`Selected ${selected}`)}}
  onChange={(value) => {console.log(`Typed ${value}`)}}
  label="Select a city"
  state="success">
</Autocomplete>
<br />
<Autocomplete
  items={[
    { label: "Antwerpen", value: "antwerpen"},
    { label: "Gent", value: "gent"},
    { label: "Brussel", value: "brussel"},
    { label: "Brugge", value: "brugge"},
    { label: "Hasselt", value: "hasselt"},
    { label: "Luik", value: "luik"},
    { label: "Oostende", value: "oostende"},
    { label: "Namen", value: "namen"},
    { label: "Mechelen", value: "mechelen"},
    { label: "Sint-Niklaas", value: "sint-niklaas"},
    { label: "Aalst", value: "aalst"},
    { label: "Genk", value: "genk"}
  ]}
  id="autocomplete-7"
  defaultValue="sint-niklaas"
  onSelection={(selected) => {console.log(`Selected ${selected}`)}}
  onChange={(value) => {console.log(`Typed ${value}`)}}
  label="Select a city"
  state="warning">
  </Autocomplete>
</div>
```

The prop `multipleSelect` can be used to allow multi selecting items.
```
<Autocomplete
  items={[
    { label: "Antwerpen", value: "antwerpen"},
    { label: "Gent", value: "gent"},
    { label: "Brussel", value: "brussel"},
    { label: "Brugge", value: "brugge"},
    { label: "Hasselt", value: "hasselt"},
    { label: "Luik", value: "luik"},
    { label: "Oostende", value: "oostende"},
    { label: "Namen", value: "namen"},
    { label: "Mechelen", value: "mechelen"},
    { label: "Sint-Niklaas", value: "sint-niklaas"},
    { label: "Aalst", value: "aalst"},
    { label: "Genk", value: "genk"}
  ]}
  id="autocomplete-8"
  multipleSelect="true"
  onSelection={(selected) => {console.log(`Selected ${selected}`)}}
  onChange={(value) => {console.log(`Typed ${value}`)}}
  label="Select a city">
</Autocomplete>
```

The prop `defaultValue` can also be used with the multipleSelect variant
```
<Autocomplete
  items={[
    { label: "Antwerpen", value: "antwerpen"},
    { label: "Gent", value: "gent"},
    { label: "Brussel", value: "brussel"},
    { label: "Brugge", value: "brugge"},
    { label: "Hasselt", value: "hasselt"},
    { label: "Luik", value: "luik"},
    { label: "Oostende", value: "oostende"},
    { label: "Namen", value: "namen"},
    { label: "Mechelen", value: "mechelen"},
    { label: "Sint-Niklaas", value: "sint-niklaas"},
    { label: "Aalst", value: "aalst"},
    { label: "Genk", value: "genk"}
  ]}
  id="autocomplete-9"
  multipleSelect="true"
  defaultValue={["luik", "oostende", "namen"]}
  onSelection={(selected) => {console.log(`Selected ${selected}`)}}
  onChange={(value) => {console.log(`Typed ${value}`)}}
  label="Select a city">
</Autocomplete>
```

The prop `allowNewEntry` & `onNewEntry` is used for allowing new entries to be created on the fly
```
<Autocomplete
  items={[
    { label: "Antwerpen", value: "antwerpen"},
    { label: "Gent", value: "gent"},
    { label: "Brussel", value: "brussel"},
    { label: "Brugge", value: "brugge"},
    { label: "Hasselt", value: "hasselt"},
    { label: "Luik", value: "luik"},
    { label: "Oostende", value: "oostende"},
    { label: "Namen", value: "namen"},
    { label: "Mechelen", value: "mechelen"},
    { label: "Sint-Niklaas", value: "sint-niklaas"},
    { label: "Aalst", value: "aalst"},
    { label: "Genk", value: "genk"}
  ]}
  id="autocomplete-10"
  multipleSelect="true"
  defaultValue={["luik", "oostende", "namen"]}
  allowNewEntry={true}
  onNewEntry={(label, callback) => {
    console.log('Handle new value', label);
    callback({ label, value: label.toLowerCase() });
  }}
  onSelection={(selected) => {console.log(`Selected ${selected}`)}}
  onChange={(value) => {console.log(`Typed ${value}`)}}
  label="Select a city">
</Autocomplete>
<Autocomplete
  items={[
    { label: "Antwerpen", value: "antwerpen"},
    { label: "Gent", value: "gent"},
    { label: "Brussel", value: "brussel"},
    { label: "Brugge", value: "brugge"},
    { label: "Hasselt", value: "hasselt"},
    { label: "Luik", value: "luik"},
    { label: "Oostende", value: "oostende"},
    { label: "Namen", value: "namen"},
    { label: "Mechelen", value: "mechelen"},
    { label: "Sint-Niklaas", value: "sint-niklaas"},
    { label: "Aalst", value: "aalst"},
    { label: "Genk", value: "genk"}
  ]}
  id="autocomplete-11"
  defaultValue="mechelen"
  allowNewEntry={true}
  onNewEntry={(label) => new Promise((resolve, reject) => {
    console.log('Handle new value', label);
    resolve({ label, value: label.toLowerCase() });
  })}
  onSelection={(selected) => {console.log(`Selected ${selected}`)}}
  onChange={(value) => {console.log(`Typed ${value}`)}}
  label="Select a city">
</Autocomplete>
```

Leave out the `onNewEntry` prop to create items with the same value and key as selected
```
<Autocomplete
  items={[
    { label: "Antwerpen", value: "antwerpen"},
    { label: "Gent", value: "gent"},
    { label: "Brussel", value: "brussel"},
    { label: "Brugge", value: "brugge"},
    { label: "Hasselt", value: "hasselt"},
    { label: "Luik", value: "luik"},
    { label: "Oostende", value: "oostende"},
    { label: "Namen", value: "namen"},
    { label: "Mechelen", value: "mechelen"},
    { label: "Sint-Niklaas", value: "sint-niklaas"},
    { label: "Aalst", value: "aalst"},
    { label: "Genk", value: "genk"}
  ]}
  id="autocomplete-12"
  multipleSelect="true"
  defaultValue={["luik", "oostende", "namen"]}
  allowNewEntry={true}
  onSelection={(selected) => {console.log(`Selected ${selected}`)}}
  onChange={(value) => {console.log(`Typed ${value}`)}}
  label="Select a city">
</Autocomplete>
<Autocomplete
  items={[]}
  id="autocomplete-13"
  multipleSelect="true"
  allowNewEntry={true}
  onSelection={(selected) => {console.log(`Selected ${selected}`)}}
  onChange={(value) => {console.log(`Typed ${value}`)}}
  label="Select a city">
</Autocomplete>

<Autocomplete
  items={[
    { label: "Antwerpen", value: "antwerpen"},
    { label: "Gent", value: "gent"},
    { label: "Brussel", value: "brussel"},
    { label: "Brugge", value: "brugge"},
    { label: "Hasselt", value: "hasselt"},
    { label: "Luik", value: "luik"},
    { label: "Oostende", value: "oostende"},
    { label: "Namen", value: "namen"},
    { label: "Mechelen", value: "mechelen"},
    { label: "Sint-Niklaas", value: "sint-niklaas"},
    { label: "Aalst", value: "aalst"},
    { label: "Genk", value: "genk"}
  ]}
  id="autocomplete-14"
  defaultValue="mechelen"
  allowNewEntry={true}
  onSelection={(selected) => {console.log(`Selected ${selected}`)}}
  onChange={(value) => {console.log(`Typed ${value}`)}}
  label="Select a city">
</Autocomplete>
```

The prop `asyncItems` can be used to lazy load the select items.
```
const items=[
          { label: "Antwerpen", value: "antwerpen"},
          { label: "Gent", value: "gent"},
          { label: "Brussel", value: "brussel"},
          { label: "Brugge", value: "brugge"},
          { label: "Hasselt", value: "hasselt"},
          { label: "Luik", value: "luik"},
          { label: "Oostende", value: "oostende"},
          { label: "Namen", value: "namen"},
          { label: "Mechelen", value: "mechelen"},
          { label: "Sint-Niklaas", value: "sint-niklaas"},
          { label: "Aalst", value: "aalst"},
          { label: "Genk", value: "genk"}
        ];
function load(query, clbk) {
    const results = items.filter(item => item.label.toLowerCase().includes(query));
    setTimeout(() => clbk(results), 2000);
}
<Autocomplete
  asyncItems={load}
  id="autocomplete-15"
  multipleSelect="true"
  onSelection={(selected) => {console.log(`Selected ${selected}`)}}
  onChange={(value) => {console.log(`Typed ${value}`)}}
  label="Select a city">
</Autocomplete>
```

Issue #1, setting items after the component has loaded later doesn't reflect the defaultValue
```
let items=[];

setTimeout(() => {
  console.log('Setting item');
  items = [
    { label: "Antwerpen", value: "294cef79-c822-448f-80cb-9d21699f9fdc"},
  ];
}, 1000);

<Autocomplete
  items={items}
  id="autocomplete-15"
  defaultValue="294cef79-c822-448f-80cb-9d21699f9fdc"
  label="Select a city">
</Autocomplete>
```


Issue #2, defaultValue does not work with items array, only the first item is selected
```
const items=[
    { label: "Antwerpen", value: "294cef79-c822-448f-80cb-9d21699f9fdc"},
    { label: "Brussel", value: "2517b2a6-1916-46b0-b22c-a9a3e9ae9f60"},
    { label: "Gent", value: "f40c71ad-4b06-4e3b-b8e8-d139e9b1bc24"},
    { label: "Mechelen", value: "47ddf1a6-f797-4c15-8cc0-b1f4793b3fdf"},
  ];

<Autocomplete
  items={items}
  id="autocomplete-15"
  defaultValue="47ddf1a6-f797-4c15-8cc0-b1f4793b3fdf"
  label="Select a city">
</Autocomplete>
```

Issue #3, having a defaultValue set and asyncLoading does not work
```
function load(query, clbk) {
    setTimeout(() => clbk([
    { label: "Antwerpen", value: "294cef79-c822-448f-80cb-9d21699f9fdc"},
    { label: "Brussel", value: "2517b2a6-1916-46b0-b22c-a9a3e9ae9f60"},
    { label: "Gent", value: "f40c71ad-4b06-4e3b-b8e8-d139e9b1bc24"},
    { label: "Mechelen", value: "47ddf1a6-f797-4c15-8cc0-b1f4793b3fdf"},
    ]), 1000);
}
<Autocomplete
  asyncItems={load}
  id="autocomplete-15"
  defaultValue="47ddf1a6-f797-4c15-8cc0-b1f4793b3fdf"
  label="Select a city">
</Autocomplete>
```

Issue #4, no required field
