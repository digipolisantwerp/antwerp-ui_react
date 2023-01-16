import { Datepicker } from '@acpaas-ui/react-components';

import 'moment/dist/locale/nl-be';
import { useState } from 'react';

export function DatepickerExamples() {
  const [date, setDate] = useState(new Date('2023-01-05').toISOString());

  return (
    <div className="u-margin-bottom" style={{ width: '420px' }}>
      <h2>Datepickers</h2>
      <p>Uncontrolled</p>
      <Datepicker isOpen />
      <p>Controlled</p>
      <Datepicker
        isOpen
        value={date}
        onChange={setDate}
        unavailable={[new Date('2023-01-13').toISOString(), new Date('2023-01-14').toISOString()]}
      />
    </div>
  );
}

export default DatepickerExamples;
