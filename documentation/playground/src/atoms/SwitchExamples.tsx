import { Switch } from '@acpaas-ui/react-components';
import { useState } from 'react';

export function SwitchExamples() {
  const [checkedControlled, setCheckedControlled] = useState(true);
  return (
    <>
      <h1>Switches</h1>
      <Switch id="switch-1" />
      <div className="u-margin-bottom" />
      <Switch
        checked
        id="switch-2"
        labelId="switch-2-label"
        statusLabelSide="right"
        label="Controlled switch - no onClick"
      />
      <div className="u-margin-bottom" />
      <Switch
        id="switch-5"
        labelId="switch-5-label"
        label="Controlled switch - Onclick"
        internalIOLabels
        checked={checkedControlled}
        onClick={() => setCheckedControlled(!checkedControlled)}
      />
      <div className="u-margin-bottom" />
      <Switch id="switch-3" labelId="switch-3-label" label="Left side label switch" statusLabelSide="left" />
      <div className="u-margin-bottom" />
      <Switch
        id="switch-4"
        labelId="switch-4-label"
        label="Switch with internal labels and custom status labels"
        statusLabelOff="OFF"
        statusLabelOn="ON"
        statusLabelSide="left"
        internalIOLabels
      />
      <div className="u-margin-bottom" />
      <Switch id="switch-6" labelId="switch-6-label" label="Disabled switch" disabled />
    </>
  );
}

export default SwitchExamples;
