import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import jest from 'jest-mock';

import { Switch } from './Switch';

describe('UI Components - Atoms - Switch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Switch />);
    expect(baseElement).toBeTruthy();
  });

  it('should handle click correctly', () => {
    const mockOnClick = jest.fn();
    const { baseElement } = render(<Switch onClick={mockOnClick} />);
    fireEvent.click(baseElement.getElementsByClassName('a-switch')[0]);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('should wrap element in label if its passed in props', () => {
    const { baseElement, rerender } = render(<Switch />);
    expect(baseElement.getElementsByClassName('a-input__label').length).toBe(0);
    rerender(<Switch label="Test" />);
    expect(baseElement.getElementsByClassName('a-input__label').length).toBe(1);
  });

  it('should render label true/false on correct side', () => {
    const { baseElement, rerender } = render(<Switch statusLabelSide="right" />);
    expect(baseElement.getElementsByClassName('a-switch')[0].firstChild).toHaveClass('a-switch__toggle');
    rerender(<Switch statusLabelSide="left" />);
    expect(baseElement.getElementsByClassName('a-switch')[0].firstChild).toHaveClass('a-switch__label');
  });

  it('should show internal IO labels', () => {
    const { baseElement, rerender } = render(<Switch />);
    expect(baseElement.getElementsByClassName('a-switch__toggle-label').length).toBe(0);
    rerender(<Switch internalIOLabels />);
    expect(baseElement.getElementsByClassName('a-switch__toggle-label').length).toBe(2);
  });
});
