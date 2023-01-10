import { Radio, RadioGroup } from '@acpaas-ui/react-components';
import { useState } from 'react';

export function RadioExamples() {
  const [controlled, setControlled] = useState('1');
  return (
    <div className="u-margin-bottom">
      <h2>Radio Buttons</h2>
      <h3>Stand-alone Radio Buttons</h3>
      <div className="u-margin-bottom-xs">
        <Radio value="first" label="First option" id="first-option" name="radio-name-1" checked />
        <Radio value="second" label="Second option" id="second-option" name="radion-name-2" />
        <Radio value="third" label="Third option" id="third-option" name="radion-name-3" disabled />
      </div>
      <h3>Radio Group</h3>
      <RadioGroup label="Uncontrolled" name="group-example">
        <Radio id="radio-group-1" value="1" label="One" />
        <Radio id="radio-group-2" value="2" label="Two" />
        <Radio id="radio-group-3" value="3" label="Three" />
        <Radio id="radio-group-4" value="4" label="Four" />
      </RadioGroup>
      <RadioGroup label="Controlled" onChange={setControlled} name="group-example-2" value={controlled}>
        <Radio id="radio-group-5" value="1" label="One" />
        <Radio id="radio-group-6" value="2" label="Two" />
        <Radio id="radio-group-7" value="3" label="Three" />
        <Radio id="radio-group-8" value="4" label="Four" />
      </RadioGroup>
    </div>
  );
}

export default RadioExamples;
