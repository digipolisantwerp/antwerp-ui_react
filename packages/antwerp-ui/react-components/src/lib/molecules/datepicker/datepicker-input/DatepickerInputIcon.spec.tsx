/* eslint-disable @typescript-eslint/ban-ts-comment */
import { fireEvent, render } from '@testing-library/react';
import { JSDOM } from 'jsdom';
import jest from 'jest-mock';

import { DatepickerInputIcon } from './DatepickerInputIcon';

describe('Datepicker', () => {
  it('should render successfully', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const { baseElement } = render(<DatepickerInputIcon onClick={() => {}} onEnter={() => {}} />);
    expect(baseElement).toBeTruthy();
  });

  it('should fetch the icons', () => {
    const dom = new JSDOM();
    const fetchMock = jest.fn(() => Promise.resolve({ text: () => 'fake-fetch' }));
    global.document = dom.window.document;
    // @ts-ignore
    global.fetch = fetchMock as jest.Mock;
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    render(<DatepickerInputIcon onClick={() => {}} onEnter={() => {}} />);
    expect(fetchMock).toBeCalledTimes(1);
  });

  it('should return the svg, even if fetch is not defined', () => {
    const dom = new JSDOM();
    global.document = dom.window.document;
    // @ts-ignore
    global.fetch = null;
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const { baseElement } = render(<DatepickerInputIcon onClick={() => {}} onEnter={() => {}} />);
    expect(baseElement.querySelector('svg')).toBeTruthy();
  });

  it('should handle enter', () => {
    const enterMock = jest.fn();
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const { getByRole } = render(<DatepickerInputIcon onClick={() => {}} onEnter={enterMock} />);
    fireEvent.keyDown(getByRole('button'), { code: 'Enter' });
    expect(enterMock).toBeCalledTimes(1);
  });
});
