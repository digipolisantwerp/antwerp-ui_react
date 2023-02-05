import { StepIndicator } from '@acpaas-ui/react-components';
import { useState } from 'react';

export function StepIndicatorExamples() {
  const [clickedOn, setClickedOn] = useState('');
  return (
    <div className="u-margin-bottom">
      <h2>Step Indicator</h2>
      <p>Clicked on step: {clickedOn}</p>
      <StepIndicator
        steps={[
          { id: 'step1', complete: true, label: 'Stap 1', link: { href: '#' } },
          { id: 'step2', active: true, label: 'Stap 2 - Gegevens' },
          { id: 'step3' },
          { id: 'step4', link: { href: '#' } }
        ]}
        onStepClick={setClickedOn}
      />
    </div>
  );
}

export default StepIndicatorExamples;
