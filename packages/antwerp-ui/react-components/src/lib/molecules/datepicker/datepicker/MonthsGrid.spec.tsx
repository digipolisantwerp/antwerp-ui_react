import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import jest from 'jest-mock';
import moment, { Moment } from 'moment';
import { MonthsGrid } from './MonthsGrid';

describe('DaysGridDay', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      <MonthsGrid activeYear={2022} onChange={() => {}} />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render 12 months of the year in 6 rows', () => {
    const { baseElement } = render(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      <MonthsGrid activeYear={2022} onChange={() => {}} />
    );
    expect(baseElement.getElementsByTagName('tr').length).toBe(6);
    Array.from(baseElement.getElementsByTagName('tr')).forEach((row) => {
      expect(row.getElementsByTagName('td').length).toBe(2);
    });
  });

  it('should handle click, when value is undefined it should set date to 1st of the month', () => {
    const clickMock = jest.fn();
    const { rerender, getByText } = render(<MonthsGrid activeYear={2022} onChange={clickMock} />);
    fireEvent.click(getByText('January'));
    expect(clickMock).toBeCalledTimes(1);
    expect((clickMock.mock.calls[0][0] as Moment).date()).toBe(1);
    clickMock.mockReset();

    rerender(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      <MonthsGrid activeYear={2022} value={moment('2020-11-10')} onChange={clickMock} />
    );
    fireEvent.click(getByText('January'));
    expect(clickMock).toBeCalledTimes(1);
    expect((clickMock.mock.calls[0][0] as Moment).date()).toBe(10);
  });
});
