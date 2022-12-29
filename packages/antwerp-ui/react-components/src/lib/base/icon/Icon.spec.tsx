/* eslint-disable @typescript-eslint/ban-ts-comment */
import jest from 'jest-mock';
import { Icon } from './Icon';
import { render, screen } from '@testing-library/react';
import { JSDOM } from 'jsdom';

describe('UI Components - Base - Icon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon name="alarm-bell" />);
    expect(baseElement).toBeTruthy();
  });

  it('should render without name', () => {
    const { baseElement } = render(<Icon name="" />);
    expect(baseElement).toBeTruthy();
  });

  it('should apply the icon-name to the icon class', () => {
    const { baseElement } = render(<Icon name="alarm-bell" />);
    expect(baseElement.getElementsByClassName('ai-alarm-bell').length).toBe(1);
  });

  it('should render an svg icon', () => {
    const { baseElement } = render(<Icon name="alarm-bell" />);
    expect(baseElement.querySelector('svg')).toBeTruthy();
    expect(baseElement.querySelector('use')?.getAttribute('href') === '#ai-alarm-bell').toBeTruthy();
  });

  it('should be able to use the long name as well', () => {
    const { baseElement } = render(<Icon name="ai-alarm-bell" />);
    expect(baseElement.getElementsByClassName('ai-alarm-bell').length).toBe(1);
    expect(baseElement.querySelector('svg')).toBeTruthy();
    expect(baseElement.querySelector('use')?.getAttribute('href') === '#ai-alarm-bell').toBeTruthy();
  });

  it('should set the data-qa attribute', () => {
    const { baseElement } = render(<Icon name="ai-alarm-bell" qa="id-1234" />);
    expect(baseElement.querySelector('span')?.getAttribute('data-qa') === 'id-1234').toBeTruthy();
  });

  it('should render with given descriptive text', () => {
    render(<Icon name="alarm-bell" screenReaderText="Click here" />);
    expect(screen.getByText('Click here'));
  });

  it('should fetch the icons', () => {
    const dom = new JSDOM();
    const fetchMock = jest.fn(() => Promise.resolve({ text: () => 'fake-fetch' }));
    global.document = dom.window.document;
    // @ts-ignore
    global.fetch = fetchMock as jest.Mock;
    render(<Icon name="alarm-bell" screenReaderText="Click here" />);
    expect(fetchMock).toBeCalledTimes(1);
  });

  it('should return the svg, even if fetch is not defined', () => {
    const dom = new JSDOM();
    global.document = dom.window.document;
    // @ts-ignore
    global.fetch = null;
    const { baseElement } = render(<Icon name="alarm-bell" screenReaderText="Click here" />);
    expect(baseElement.querySelector('svg')).toBeTruthy();
  });
});
