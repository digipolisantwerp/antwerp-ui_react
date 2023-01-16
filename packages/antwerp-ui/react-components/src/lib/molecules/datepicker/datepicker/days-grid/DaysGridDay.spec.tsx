import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import jest from 'jest-mock';
import moment from 'moment';

import { DaysGridDay } from '../days-grid/DaysGridDay';

describe('DaysGridDay', () => {
  it('should render successfully', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const { baseElement } = render(<DaysGridDay date={moment()} activeMonth={moment()} onChange={() => {}} />);
    expect(baseElement).toBeTruthy();
  });

  it('should make it unavailable when `unavailable`, `unavailableFrom` or `unavailableTo` are provided', () => {
    const { rerender, getByRole } = render(
      <DaysGridDay
        date={moment('2023-01-15')}
        unavailable={['2023-01-15']}
        activeMonth={moment()}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange={() => {}}
      />
    );
    expect(getByRole('button')).toBeDisabled();
    expect(getByRole('button')).toHaveClass('is-unavailable');

    rerender(
      <DaysGridDay
        date={moment('2023-01-15')}
        unavailableFrom={'2023-01-15'}
        activeMonth={moment()}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange={() => {}}
      />
    );
    expect(getByRole('button')).toBeDisabled();
    expect(getByRole('button')).toHaveClass('is-unavailable');

    rerender(
      <DaysGridDay
        date={moment('2023-01-15')}
        unavailableTo={'2023-01-15'}
        activeMonth={moment()}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange={() => {}}
      />
    );
    expect(getByRole('button')).toBeDisabled();
    expect(getByRole('button')).toHaveClass('is-unavailable');
  });

  it('should set tab index to -1 and be disabled if is unavailable', () => {
    const { rerender, getByText } = render(
      <DaysGridDay
        date={moment('2023-01-15')}
        unavailable={['2023-01-15']}
        activeMonth={moment()}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange={() => {}}
      />
    );
    expect(getByText('15').parentElement?.tabIndex).toBe(-1);
    expect(getByText('15').parentElement).toBeDisabled();
    rerender(
      <DaysGridDay
        date={moment('2023-01-16')}
        unavailable={[new Date('2023-01-15').toISOString()]}
        activeMonth={moment()}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange={() => {}}
      />
    );
    expect(getByText('16').parentElement?.tabIndex).toBe(0);
    expect(getByText('16').parentElement).not.toBeDisabled();
  });

  it('should have correct aria-label', () => {
    const { getByText } = render(
      <DaysGridDay
        date={moment('2023-01-15')}
        activeMonth={moment()}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange={() => {}}
      />
    );
    expect(getByText('15').parentElement).toHaveAccessibleName('Sunday 15 January 2023');
  });

  it('should have aria-pressed if is selected', () => {
    const { rerender, getByRole } = render(
      <DaysGridDay
        date={moment('2023-01-16')}
        activeMonth={moment()}
        value={moment('2023-01-16')}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange={() => {}}
      />
    );
    expect(getByRole('button', { pressed: true })).toBeInTheDocument();
    rerender(
      <DaysGridDay
        date={moment('2023-01-16')}
        activeMonth={moment()}
        value={moment('2023-01-15')}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange={() => {}}
      />
    );
    expect(getByRole('button', { pressed: false })).toBeInTheDocument();
  });

  it('should handle click', () => {
    const changeMock = jest.fn();
    const date = moment('2023-01-16');
    const { getByRole } = render(
      <DaysGridDay
        date={date}
        activeMonth={moment()}
        value={moment('2023-01-16')}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange={changeMock}
      />
    );
    fireEvent.click(getByRole('button'));
    expect(changeMock).toBeCalledTimes(1);
    expect(changeMock).toBeCalledWith(date);
  });
});
