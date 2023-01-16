import { render } from '@testing-library/react';

import { Datepicker } from './Datepicker';

describe('Datepicker', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Datepicker isOpen />);
    expect(baseElement).toBeTruthy();
  });
});
