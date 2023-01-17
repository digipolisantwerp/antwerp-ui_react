import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import jest from 'jest-mock';

import { Toggle } from './Toggle';

describe('UI Components - Atoms - Toggle', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<Toggle />);
    expect(baseElement).toBeTruthy();
  });

  it('should toggle element on checked prop change', () => {
    const { baseElement, rerender } = render(<Toggle />);
    expect(baseElement.getElementsByClassName('a-toggle__off').length).toBe(1);

    rerender(<Toggle checked />);
    expect(baseElement.getElementsByClassName('a-toggle__on').length).toBe(1);
  });

  it('should render checked icon by default', () => {
    const { baseElement } = render(<Toggle checked />);
    expect(baseElement.getElementsByClassName('ai-navigation-menu').length).toBe(1);
  });

  it('should render unchecked icon by default', () => {
    cleanup();
    const { baseElement } = render(<Toggle />);
    expect(baseElement.getElementsByClassName('ai-close').length).toBe(1);
  });

  it('should NOT render checked icon if not provided', () => {
    const { baseElement } = render(<Toggle checked checkedIcon="" />);
    expect(baseElement.getElementsByClassName('ai-navigation-menu').length).toBe(0);
  });

  it('should NOT render unchecked icon if not provided', () => {
    const { baseElement } = render(<Toggle uncheckedIcon="" />);
    expect(baseElement.getElementsByClassName('ai-close').length).toBe(0);
  });

  it('should NOT render labels if `showLabels` is false', () => {
    const { baseElement, rerender } = render(<Toggle checkedLabel="Checked label" showLabels />);
    expect(baseElement.getElementsByClassName('a-toggle__label').length).toBe(2);
    rerender(<Toggle showLabels={false} />);
    expect(baseElement.getElementsByClassName('a-toggle__label').length).toBe(0);
  });

  it('should call onClick with proper checked value when element is clicked', () => {
    const handleClick = jest.fn();
    const { baseElement } = render(<Toggle onClick={handleClick} />);
    fireEvent.click(baseElement.getElementsByTagName('button')[0]);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledWith(true);
  });
});
