import { Checkbox } from '@acpaas-ui/react-components';
import { ChangeEvent, useState } from 'react';

export function CheckboxExamples() {
  const [firstChecked, setFirstChecked] = useState(false);
  const onCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstChecked(event.target.checked);
  };
  return (
    <div className="u-margin-bottom">
      <h2>Checkboxes</h2>
      <Checkbox name="checkbox" id="check-1" label="Controlled" onChange={onCheckboxChange} checked={firstChecked} />
      <Checkbox name="checkbox" id="check-2" label="Controlled no onChange" checked={true} />
      <Checkbox name="checkbox" id="check-3" label="Controlled no onChange" checked={false} />
      <Checkbox name="checkbox" id="check-4" label="Indeterminate" indeterminate />
      <Checkbox name="checkbox" id="check-5" label="Uncontrolled" />
      <Checkbox name="checkbox" id="check-6" label="Disabled unchecked" disabled />
      <Checkbox name="checkbox" id="check-7" label="Disabled indeterminate" disabled indeterminate />
      <Checkbox name="checkbox" id="check-8" label="Disabled checked" disabled checked />
      <Checkbox name="checkbox" id="check-9" label="Hidden label" showLabel={false} />
    </div>
  );
}

export default CheckboxExamples;
