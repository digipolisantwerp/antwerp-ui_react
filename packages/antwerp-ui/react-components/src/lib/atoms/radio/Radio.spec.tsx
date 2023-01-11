import jest from 'jest-mock';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Radio } from './Radio';
import { RadioProps } from './Radio.types';

describe('UI Components - Atoms - Radio', () => {
  const defaultProps: RadioProps = {
    value: 'radio',
    label: 'Radio',
    id: 'radio',
    qa: 'radio',
    name: 'options',
    checked: false,
    disabled: false
  };

  it('should render a radio button and a label', () => {
    const { getByLabelText } = render(<Radio {...defaultProps} />);
    const radioButton = getByLabelText('Radio') as HTMLInputElement;
    expect(radioButton).toBeInTheDocument();
    expect(radioButton.type).toBe('radio');
    expect(radioButton.id).toBe('radio');
    expect(radioButton.name).toBe('options');
    expect(radioButton.value).toBe('radio');
  });

  it('should trigger the onChange prop when the radio button is clicked', () => {
    const mockOnChange = jest.fn();
    const { getByLabelText } = render(<Radio {...defaultProps} onChange={mockOnChange} />);
    fireEvent.click(getByLabelText('Radio'));
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it('should set the disabled prop when provided', () => {
    const { getByLabelText } = render(<Radio {...defaultProps} disabled />);
    expect((getByLabelText('Radio') as HTMLInputElement).disabled).toBe(true);
  });
});
