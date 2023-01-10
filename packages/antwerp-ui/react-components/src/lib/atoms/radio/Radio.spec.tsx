import jest from 'jest-mock';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Radio } from './Radio';
import { RadioGroup } from './RadioGroup';
import { RadioProps, RadioGroupProps } from './Radio.types';

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

describe('UI Components - Atoms - RadioGroup', () => {
  const defaultProps: RadioGroupProps = {
    name: 'radiogroup',
    qa: 'radio'
  };
  it('should render a label and children elements', () => {
    const { getByText, getByLabelText } = render(
      <RadioGroup {...defaultProps} label="Radio Group">
        <Radio value="Scorpion" label="Scorpion" id="first-option" />
        <Radio value="Raiden" label="Raiden" id="second-option" />
      </RadioGroup>
    );
    expect(getByText('Radio Group')).toBeInTheDocument();
    expect(getByLabelText('Scorpion')).toBeInTheDocument();
    expect(getByLabelText('Raiden')).toBeInTheDocument();
  });
  it('should set the name prop on child elements', () => {
    const { getByLabelText } = render(
      <RadioGroup {...defaultProps}>
        <Radio value="Scorpion" label="Scorpion" id="first-option" />
        <Radio value="Raiden" label="Raiden" id="second-option" />
      </RadioGroup>
    );
    expect((getByLabelText('Scorpion') as HTMLInputElement).name).toBe('radiogroup');
    expect((getByLabelText('Raiden') as HTMLInputElement).name).toBe('radiogroup');
  });
  it('should set the checked prop on child element with the provided value', () => {
    const { getByLabelText } = render(
      <RadioGroup {...defaultProps} value="Raiden">
        <Radio value="Scorpion" label="Scorpion" id="first-option" />
        <Radio value="Raiden" label="Raiden" id="second-option" />
        <Radio value="Sub-Zero" label="Sub-Zero" id="third-option" />
      </RadioGroup>
    );
    expect((getByLabelText('Scorpion') as HTMLInputElement).checked).toBe(false);
    expect((getByLabelText('Raiden') as HTMLInputElement).checked).toBe(true);
    expect(getByLabelText('Scorpion') as HTMLInputElement).not.toBeChecked();
    expect(getByLabelText('Raiden') as HTMLInputElement).toBeChecked();
  });
  it('should set the checked prop on the child element with the selected value', () => {
    const { getByLabelText } = render(
      <RadioGroup {...defaultProps}>
        <Radio value="Scorpion" label="Scorpion" id="first-option" />
        <Radio value="Raiden" label="Raiden" id="second-option" />
        <Radio value="Sub-Zero" label="Sub-Zero" id="third-option" />
        <Radio value="None" label="None" id="fourth-option" />
      </RadioGroup>
    );
    fireEvent.click(getByLabelText('Raiden') as HTMLInputElement);
    expect(getByLabelText('Raiden') as HTMLInputElement).toBeChecked();
    expect(getByLabelText('Scorpion') as HTMLInputElement).not.toBeChecked();
  });
  it('should trigger the onChange prop when a child element is clicked', () => {
    const mockOnChange = jest.fn();
    const { getByLabelText } = render(
      <RadioGroup {...defaultProps} onChange={mockOnChange}>
        <Radio value="Scorpion" label="Scorpion" id="first-option" />
        <Radio value="Raiden" label="Raiden" id="second-option" />
        <Radio value="Sub-Zero" label="Sub-Zero" id="third-option" />
        <Radio value="None" label="None" id="fourth-option" />
      </RadioGroup>
    );
    fireEvent.click(getByLabelText('Raiden') as HTMLInputElement);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
