import { RangeSlider } from '@acpaas-ui/react-components';
import { useState } from 'react';

export function RangeSliderExamples() {
  const [handleStartValue, setHandleStartValue] = useState(5);
  const [handleEndValue, setHandleEndValue] = useState(12);

  const handleChange = (start: number, end?: number) => {
    setHandleStartValue(start);
    setHandleEndValue(end || 0);
  };

  return (
    <>
      <h1>Range Sliders</h1>
      <div style={{ marginLeft: '40px', width: '400px' }}>
        <RangeSlider />
      </div>
      <div className="u-margin-xl">
        <RangeSlider
          min={0}
          max={20}
          onChange={handleChange}
          start={handleStartValue}
          end={handleEndValue}
          tickMarks
          step={1}
          minRange={3}
          range
          unit="attempts"
          label="Attempts on Superman's life"
          iconStart="volume-control-off"
          iconEnd="volume-control-full"
        />
        <RangeSlider
          min={0}
          max={10}
          start={5}
          end={8}
          step={1}
          unit="out of 10"
          label="Controlled no onChange"
          labelStart="Down"
          labelEnd="Up"
        />
      </div>
    </>
  );
}

export default RangeSliderExamples;
