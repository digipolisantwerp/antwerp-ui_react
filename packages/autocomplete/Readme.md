```
<Autocomplete items={[
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