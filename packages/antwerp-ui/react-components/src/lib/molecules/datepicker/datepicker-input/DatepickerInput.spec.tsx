import { render } from '@testing-library/react';

import DatepickerInput from './DatepickerInput';

describe('Datepicker', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DatepickerInput />);
    expect(baseElement).toBeTruthy();
  });
});
