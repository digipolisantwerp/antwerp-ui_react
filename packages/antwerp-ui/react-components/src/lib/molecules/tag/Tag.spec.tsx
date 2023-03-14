import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import jest from 'jest-mock';
import { Tag } from './Tag';

describe('UI Components - Molecules - Tag', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Tag label="tag" />);
    expect(baseElement).toBeTruthy();
  });

  it('should render with label and iconLeft', () => {
    const { getByText, baseElement } = render(<Tag label="IMINTHEDOM" iconLeft="tags" />);
    expect(getByText('IMINTHEDOM')).toBeInTheDocument();
    expect(baseElement.querySelector('span.ai-tags')).toBeTruthy();
  });

  it('should toggle pressed state and call onClick when clicked if toggle prop is passed', () => {
    const mockOnClick = jest.fn();
    const { baseElement } = render(<Tag label="Tag" isToggle onClick={mockOnClick} />);
    const tag = baseElement.querySelector('.m-tag') as Element;
    fireEvent.click(tag);
    expect(mockOnClick).toHaveBeenCalled();
    expect(tag).toHaveAttribute('aria-pressed', 'true');
    fireEvent.click(tag);
    expect(tag).toHaveAttribute('aria-pressed', 'false');
  });

  it('should call onClick when removable prop is passed', () => {
    const mockOnClick = jest.fn();
    const { baseElement } = render(<Tag label="Hello world" removable onClick={mockOnClick} />);
    const deleteButton = baseElement.querySelector('.m-tag__button') as Element;
    fireEvent.click(deleteButton);
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('should render a button when toggle is true', () => {
    const { baseElement } = render(<Tag label="Hello world" isToggle />);
    expect(baseElement.querySelector('.m-tag')).toBeInstanceOf(HTMLButtonElement);
  });

  it('should render a div when toggle is false', () => {
    const { baseElement } = render(<Tag label="" />);
    expect(baseElement.querySelector('.m-tag')).toBeInstanceOf(HTMLDivElement);
  });

  it('should stay pressed if component is controlled', () => {
    const { baseElement } = render(<Tag label="Tag" isToggle active />);
    const tag = baseElement.querySelector('.m-tag') as Element;
    fireEvent.click(tag);
    expect(tag).toHaveAttribute('aria-pressed', 'true');
    fireEvent.click(tag);
    expect(tag).toHaveAttribute('aria-pressed', 'true');
  });
});
