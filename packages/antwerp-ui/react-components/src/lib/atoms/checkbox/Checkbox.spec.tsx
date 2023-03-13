import '@testing-library/jest-dom';
import jest from 'jest-mock';
import { fireEvent, render } from '@testing-library/react';
import { Checkbox } from './Checkbox';
import { CheckboxProps } from './Checkbox.types';

describe('UI Components - Atoms - Checkbox', () => {
  const defaultProps: CheckboxProps = {
    label: 'Checkbox',
    id: 'checkbox',
    name: 'checkbox'
  };

  it('renders a checkbox with the given label', () => {
    const { getByLabelText } = render(<Checkbox {...defaultProps} />);
    const checkbox = getByLabelText('Checkbox') as HTMLInputElement;
    expect(checkbox).toBeInTheDocument();
    expect(checkbox.type).toBe('checkbox');
  });

  it('can hide the label of a checkbox', () => {
    const { container } = render(<Checkbox {...defaultProps} showLabel={false} />);
    expect(container.getElementsByClassName('u-screen-reader-only')).toBeTruthy();
  });

  it('sets the checked property when the checkbox is clicked', () => {
    const { getByLabelText } = render(<Checkbox {...defaultProps} />);
    const checkbox = getByLabelText('Checkbox') as HTMLInputElement;
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it('sets the checked property when passed', () => {
    const { getByLabelText } = render(<Checkbox {...defaultProps} checked />);
    const checkbox = getByLabelText('Checkbox') as HTMLInputElement;
    expect(checkbox).toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it('sets the indeterminate property', () => {
    const { getByLabelText } = render(<Checkbox {...defaultProps} indeterminate />);
    const checkbox = getByLabelText('Checkbox') as HTMLInputElement;
    expect(checkbox).toHaveProperty('indeterminate', true);
  });

  it('sets the disabled property', () => {
    const { getByLabelText } = render(<Checkbox {...defaultProps} disabled />);
    const checkbox = getByLabelText('Checkbox') as HTMLInputElement;
    expect(checkbox).toHaveProperty('disabled', true);
  });

  it('triggers the onChange function', () => {
    const mockOnChange = jest.fn();
    const { getByLabelText } = render(<Checkbox {...defaultProps} onChange={mockOnChange} />);
    fireEvent.click(getByLabelText('Checkbox'));
    expect(mockOnChange).toHaveBeenCalled();
  });
});
