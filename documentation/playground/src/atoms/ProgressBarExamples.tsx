import { ProgressBar } from '@acpaas-ui/react-components';
import { useEffect, useState } from 'react';

export function ProgressBarExamples() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (value + 1 > 100) {
        setValue(0);
      } else {
        setValue(value + 1);
      }
    }, 25);
  }, [value]);

  return (
    <>
      <h1>Progress bars</h1>
      <div className="u-margin-top">
        <ProgressBar percentage={value} label="Progress" />
      </div>
      <div className="u-margin-top">
        <ProgressBar label="With label" percentage={value} large />
      </div>
    </>
  );
}

export default ProgressBarExamples;
