import jest from 'jest-mock';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Autocomplete } from './Autocomplete';

window.HTMLElement.prototype.scrollIntoView = function () {
  return true;
};

describe('Autocomplete', () => {
  const items = [
    { label: 'Acadia', value: '1' },
    { label: 'American Samoa', value: '2' },
    { label: 'Bryce Canyon', value: '3' },
    { label: 'Canyonlands', value: '4' }
  ];

  it('should render successfully', () => {
    const { baseElement } = render(<Autocomplete />);
    expect(baseElement).toBeTruthy();
  });

  it('should set the data-qa attribute', () => {
    const { container } = render(<Autocomplete qa="autocomplete-qa" />);
    expect(container.getElementsByClassName('m-flyout')[0].getAttribute('data-qa') === 'autocomplete-qa').toEqual(true);
  });

  it('should render the correct label for the autocomplete', () => {
    const { baseElement } = render(<Autocomplete label="Hello" />);
    expect(baseElement.querySelector('label')?.textContent === 'Hello').toBeTruthy();
  });

  it('should render the no results lists if no items are provided', () => {
    const { findByText } = render(<Autocomplete label="Hello" />);
    expect(findByText('Geen resultaten')).toBeTruthy();
  });

  it('should render the list items', () => {
    const { findByText } = render(<Autocomplete items={items} />);
    expect(findByText('Acadia')).toBeTruthy();
    expect(findByText('Canyonlands')).toBeTruthy();
  });

  it('should call onInputChange when text is typed', () => {
    const mockOnChange = jest.fn();
    const { getByRole } = render(<Autocomplete label="InputChangeTest" onInputChange={mockOnChange} />);
    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Aca' } });
    expect(mockOnChange).toHaveBeenCalled();
  });

  it('should filter the results', async () => {
    const { getByRole, queryAllByText } = render(<Autocomplete items={items} />);
    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Aca' } });
    expect(queryAllByText('Canyonlands')).toEqual([]);
  });

  it('should call onChange when an item is clicked', async () => {
    const mockOnChange = jest.fn();
    const { getByRole, getByText } = render(<Autocomplete name="name" onChange={mockOnChange} items={items} />);
    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Aca' } });
    fireEvent.click(getByText('Acadia'));
    fireEvent.mouseDown(getByText('Acadia'));
    expect(mockOnChange).toHaveBeenCalledWith('1', 'name');
  });

  it('should set value back if not complete empty', async () => {
    const mockOnChange = jest.fn();
    const { getByRole, getByText } = render(<Autocomplete name="name" onChange={mockOnChange} items={items} />);
    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Aca' } });
    fireEvent.click(getByText('Acadia'));
    expect(mockOnChange).toHaveBeenCalledWith('1', 'name');
    fireEvent.change(input, { target: { value: 'Ac' } });
    fireEvent.blur(input);
    expect(input.getAttribute('value')).toEqual('Acadia');
  });

  it('should be able to use keyboard controls with Autocomplete', () => {
    const mockOnChange = jest.fn();
    const { baseElement, getByRole, getByText } = render(
      <Autocomplete name="keyboard-test" items={items} onChange={mockOnChange} />
    );
    const input = getByRole('textbox');
    fireEvent.keyDown(input, { key: 'ArrowDown', code: 40 });
    expect(baseElement.getElementsByClassName('m-flyout')[0].className.includes('is-open')).toBeTruthy();
    expect(getByText('Acadia').parentElement?.className).toContain('is-highlighted');
    fireEvent.keyDown(input, { key: 'ArrowDown', code: 40 });
    fireEvent.keyDown(input, { key: 'ArrowUp', code: 38 });
    fireEvent.keyDown(input, { key: 'ArrowUp', code: 38 });
    expect(getByText('Canyonlands').parentElement?.className).toContain('is-highlighted');
    fireEvent.keyDown(input, { key: 'Enter', code: 13 });
    expect(mockOnChange).toHaveBeenCalledWith('4', 'keyboard-test');
  });

  it('should be controlled if the props are provided', () => {
    const { getByRole } = render(<Autocomplete inputValue="Hello" value="2" />);
    const input = getByRole('textbox');
    expect(input.getAttribute('value')).toEqual('Hello');
  });

  it('should call onChange when input is emptied', async () => {
    const mockOnChange = jest.fn();
    const { getByRole, getByText } = render(<Autocomplete name="name" onChange={mockOnChange} items={items} />);
    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Aca' } });
    fireEvent.click(getByText('Acadia'));
    expect(mockOnChange).toHaveBeenCalledWith('1', 'name');
    fireEvent.change(input, { target: { value: '' } });
    expect(mockOnChange).toHaveBeenCalledWith('', 'name');
  });

  it('should be able to use keyboard controls even without items', () => {
    const { baseElement, getByRole } = render(<Autocomplete name="keyboard-test" />);
    const input = getByRole('textbox');
    fireEvent.keyDown(input, { key: 'ArrowUp', code: 38 });
    fireEvent.keyDown(input, { key: 'ArrowDown', code: 40 });
    fireEvent.keyDown(input, { key: 'UNKNOWN', code: 2332 });
    expect(baseElement).toBeTruthy();
  });

  it('should close options when pressing escape', () => {
    const { baseElement, getByRole } = render(<Autocomplete />);
    const input = getByRole('textbox');
    fireEvent.click(input);
    expect(baseElement.getElementsByClassName('m-flyout')[0].className.includes('is-open')).toBeTruthy();
    fireEvent.keyDown(input, { key: 'Escape', code: 27 });
    expect(baseElement.getElementsByClassName('m-flyout')[0].className.includes('is-open')).toBeFalsy();
  });
});
