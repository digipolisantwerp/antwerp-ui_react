import { RangeSlider } from './RangeSlider';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('UI Components - Atoms - RangeSlider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RangeSlider />);
    expect(baseElement).toBeTruthy();
  });
});
