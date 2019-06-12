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
  onSelection={(selected) => {console.log(`Selected ${selected}`)}}
  onChange={(value) => {console.log(`Typed ${value}`)}}
  label="Selecteer een stad">
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
  defaultValue="oostende"
  onSelection={(selected) => {console.log(`Selected ${selected}`)}}
  onChange={(value) => {console.log(`Typed ${value}`)}}
  label="Selecteer een stad">
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
  defaultValue="oostende"
  onSelection={(selected) => {console.log(`Selected ${selected}`)}}
  onChange={(value) => {console.log(`Typed ${value}`)}}
  label="Selecteer een stad"
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
  defaultValue="oostende"
  onSelection={(selected) => {console.log(`Selected ${selected}`)}}
  onChange={(value) => {console.log(`Typed ${value}`)}}
  label="Selecteer een stad"
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
  defaultValue="oostende"
  onSelection={(selected) => {console.log(`Selected ${selected}`)}}
  onChange={(value) => {console.log(`Typed ${value}`)}}
  label="Selecteer een stad"
  state="error">
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
  defaultValue="oostende"
  onSelection={(selected) => {console.log(`Selected ${selected}`)}}
  onChange={(value) => {console.log(`Typed ${value}`)}}
  label="Selecteer een stad"
  state="success">
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
  defaultValue="oostende"
  onSelection={(selected) => {console.log(`Selected ${selected}`)}}
  onChange={(value) => {console.log(`Typed ${value}`)}}
  label="Selecteer een stad"
  state="warning">
  </Autocomplete>
</div>
```