import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import jest from 'jest-mock';
import moment from 'moment';

import { DatepickerInput } from './DatepickerInput';

describe('Datepicker', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DatepickerInput />);
    expect(baseElement).toBeTruthy();
  });

  it('should render Datepicker if user clicks on calendar icon', () => {
    const { baseElement, getByRole } = render(<DatepickerInput />);
    fireEvent.click(getByRole('button'));

    expect(baseElement.getElementsByClassName('m-datepicker').length).toBe(1);
  });

  it('should handle date selection from calendar', () => {
    const mockChange = jest.fn();
    const { baseElement, getByRole, getByText } = render(<DatepickerInput onChange={mockChange} />);
    fireEvent.click(getByRole('button'));
    fireEvent.click(getByText('10'));
    expect(baseElement.getElementsByClassName('m-datepicker').length).toBe(0);
    expect(mockChange).toBeCalledTimes(1);
    expect(mockChange).toBeCalledWith(
      `10/${(moment().month() + 1).toString().padStart(2, '0')}/${moment().year()}`,
      true
    );
    expect(getByRole('textbox')).toHaveValue(
      `10/${(moment().month() + 1).toString().padStart(2, '0')}/${moment().year()}`
    );
  });

  it('should handle input date change', () => {
    const mockChange = jest.fn();
    const { getByRole, getByText } = render(<DatepickerInput onChange={mockChange} />);
    fireEvent.change(getByRole('textbox'), { target: { value: '10/10/2023' } });
    expect(mockChange).toBeCalledTimes(1);
    expect(mockChange).toBeCalledWith('10/10/2023', true);
    fireEvent.click(getByRole('button'));
    expect(getByText('10').parentElement).toHaveClass('is-selected');
  });

  it('should set input error state with message when manually entered date is not valid and then clear it if valid one is entered', () => {
    const { getByRole, getByText, queryByText } = render(<DatepickerInput />);
    fireEvent.change(getByRole('textbox'), { target: { value: '10/33/2023' } });
    expect(getByText('Datum is niet geldig')).toBeInTheDocument();
    fireEvent.change(getByRole('textbox'), { target: { value: '10/10/2023' } });
    expect(queryByText('Datum is niet geldig')).not.toBeInTheDocument();
  });

  it('should close calendar if its blurred', () => {
    const { baseElement, getByRole } = render(<DatepickerInput />);
    fireEvent.click(getByRole('button'));
    expect(baseElement.getElementsByClassName('m-datepicker').length).toBe(1);
    fireEvent.blur(baseElement.getElementsByClassName('m-datepicker')[0]);
    expect(baseElement.getElementsByClassName('m-datepicker').length).toBe(0);
  });

  it('should close calendar if user clicks outside', () => {
    const { container, baseElement, getByRole } = render(<DatepickerInput />);
    fireEvent.click(getByRole('button'));
    expect(baseElement.getElementsByClassName('m-datepicker').length).toBe(1);
    fireEvent.click(container);
    expect(baseElement.getElementsByClassName('m-datepicker').length).toBe(0);
  });

  it('should allow to set value on render', () => {
    const { getByLabelText, getByRole } = render(<DatepickerInput value="01/01/2023" />);
    fireEvent.click(getByRole('button'));
    expect(getByLabelText('Sunday 1 January 2023')).toHaveClass('is-selected');
  });
});
