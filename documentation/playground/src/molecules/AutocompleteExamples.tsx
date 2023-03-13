import { Autocomplete, Button } from '@acpaas-ui/react-components';
import { useState } from 'react';

const items = [
  { label: 'Acadia', value: '1' },
  { label: 'American Samoa', value: '2' },
  { label: 'Arches', value: '3' },
  { label: 'Badlands', value: '4' },
  { label: 'Big Bend', value: '5' },
  { label: 'Biscayne', value: '6' },
  { label: 'Black Canyon of the Gunnison', value: '7' },
  { label: 'Bryce Canyon', value: '8' },
  { label: 'Canyonlands', value: '9' },
  { label: 'Capitol Reef', value: '10' }
];

export function AutocompleteExamples() {
  const [value, setValue] = useState('1');
  const [inputValue, setInputValue] = useState('');
  return (
    <div className="u-margin" style={{ width: '420px' }}>
      <h2>Autocomplete</h2>
      <div className="u-margin-bottom"></div>
      <Autocomplete id="autocomplete-example-1" label="Select National Parc (Uncontrolled)" items={items} />

      <Autocomplete
        id="autocomplete-example-2"
        noResultsText="NOTHING FOUND"
        label="Select National Parc (Controlled)"
        items={items}
        inputValue={inputValue}
        onInputChange={setInputValue}
        onChange={setValue}
        value={value}
      />

      <Button className="u-margin-top" size="small" theme="warning" onClick={() => setValue('8')}>
        Click to select "Bryce Canyon"
      </Button>
    </div>
  );
}

export default AutocompleteExamples;
