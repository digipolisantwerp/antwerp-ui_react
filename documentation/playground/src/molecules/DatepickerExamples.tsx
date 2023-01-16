import { Datepicker } from '@acpaas-ui/react-components';

import 'moment/dist/locale/nl-be';

export function DatepickerExamples() {
  return (
    <div className="u-margin-bottom" style={{ width: '420px' }}>
      <h2>Datepickers</h2>
      <Datepicker
        isOpen
        unavailableFrom={new Date('2023-01-17').toISOString()}
        unavailableTo={new Date('2023-01-05').toISOString()}
        unavailable={[new Date('2023-01-13').toISOString()]}
      />
    </div>
  );
}

export default DatepickerExamples;
