import { Toggle } from '@acpaas-ui/react-components';
import { useState } from 'react';

export function ToggleExamples() {
  const [toggle1Checked, setToggle1Checked] = useState(false);
  const [toggle2Checked, setToggle2Checked] = useState(false);
  const [toggle3Checked, setToggle3Checked] = useState(true);
  const [toggle4Checked, setToggle4Checked] = useState(false);
  return (
    <>
      <h1>Toggles</h1>
      <Toggle
        checked={toggle1Checked}
        checkedLabel="Menu"
        uncheckedLabel="Close"
        showLabels
        onClick={setToggle1Checked}
      />
      <br />
      <Toggle
        id="toggle-small"
        size="small"
        checkedLabel="Open menu"
        checkedIcon="mouse"
        uncheckedIcon="mouse"
        uncheckedLabel="Close menu"
        checked={toggle2Checked}
        onClick={setToggle2Checked}
      />
      <br />
      <Toggle
        id="toggle-large"
        size="large"
        checkedLabel="Open menu"
        checked={toggle3Checked}
        onClick={setToggle3Checked}
        checkedIcon="navigation-menu"
        uncheckedIcon="maps"
        uncheckedLabel="Close menu"
      />
      <br />
      <Toggle
        checked={toggle4Checked}
        onClick={setToggle4Checked}
        showLabels
        id="toggle-with-labels"
        checkedLabel="List view"
        checkedIcon="list-bullets"
        uncheckedTheme="warning"
        uncheckedLabel="Card view"
        uncheckedIcon="maps"
      />
    </>
  );
}

export default ToggleExamples;
