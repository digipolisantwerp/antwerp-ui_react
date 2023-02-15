import { fireEvent, render } from '@testing-library/react';
import jest from 'jest-mock';
import '@testing-library/jest-dom';
import { FunctionalList, ListItem, ListItemCheckbox, ListItemAvatar, AvatarList, CheckboxList } from '../index';

describe('UI Components - Atoms - FunctionalList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FunctionalList />);
    expect(baseElement).toBeTruthy();
  });

  it('should render the correct child items', () => {
    const { getByText } = render(
      <FunctionalList>
        <ListItem iconLeft="mouse">List item 1</ListItem>
        <ListItem iconRight="mouse">List item 2</ListItem>
      </FunctionalList>
    );
    expect(getByText('List item 1')).toBeInTheDocument();
    expect(getByText('List item 2')).toBeInTheDocument();
  });

  it('should render an ordered list', () => {
    const { container } = render(<FunctionalList ordered />);
    expect(container.querySelector('ol')).toBeInTheDocument();
  });

  it('should render an unordered list', () => {
    const { container } = render(<FunctionalList />);
    expect(container.querySelector('ul')).toBeInTheDocument();
  });

  it('should render a lined / flushed list', () => {
    const { container } = render(<FunctionalList lined flushed />);
    expect(container.querySelector('.a-list.a-list--lined.a-list--flushed')).toBeInTheDocument();
  });

  it('should trigger onItemClick and onClick on children', () => {
    const mockClick = jest.fn();
    const mockClick2 = jest.fn();
    const { getAllByRole } = render(
      <FunctionalList onItemClick={mockClick}>
        <ListItem link={{ href: '' }}>List item 1</ListItem>
        <ListItem link={{ href: '#' }} active onClick={mockClick2}>
          List item 2
        </ListItem>
      </FunctionalList>
    );
    fireEvent.click(getAllByRole('link')[0]);
    fireEvent.click(getAllByRole('link')[1]);
    expect(mockClick).toBeCalledTimes(1);
    expect(mockClick2).toBeCalledTimes(1);
  });

  it('should render a checkbox list', () => {
    const { container } = render(
      <FunctionalList type="checkbox" flushed>
        <ListItemCheckbox name="test" id="test"></ListItemCheckbox>
      </FunctionalList>
    );
    expect(container.querySelector('.a-checkbox-list.a-checkbox-list--flushed')).toBeInTheDocument();
    expect(container.querySelector('.a-list')).not.toBeInTheDocument();
  });

  it('should provide syntatic sugar for a checkbox list', () => {
    const { container } = render(
      <CheckboxList type="checkbox" flushed>
        <ListItemCheckbox name="test" id="test"></ListItemCheckbox>
      </CheckboxList>
    );
    expect(container.querySelector('.a-checkbox-list.a-checkbox-list--flushed')).toBeInTheDocument();
    expect(container.querySelector('.a-list')).not.toBeInTheDocument();
  });

  it('should trigger onItemClick and onClick on children in Checkbox lists', () => {
    const mockClick = jest.fn();
    const { baseElement } = render(
      <FunctionalList type="checkbox" onItemClick={mockClick}>
        <ListItemCheckbox name="1" id="1" />
      </FunctionalList>
    );
    fireEvent.click(baseElement.getElementsByClassName('a-input')[0]);
    expect(mockClick).toBeCalledTimes(1);
  });

  it('should render an avatar list', () => {
    const { container } = render(
      <FunctionalList type="avatar">
        <ListItemAvatar iconRight="mouse"></ListItemAvatar>
      </FunctionalList>
    );
    expect(container.querySelector('.a-avatar-list')).toBeInTheDocument();
    expect(container.querySelector('.a-list')).not.toBeInTheDocument();
  });

  it('should provide syntatic sugar for an avatar list', () => {
    const { container } = render(
      <AvatarList type="avatar">
        <ListItemAvatar iconRight="mouse"></ListItemAvatar>
      </AvatarList>
    );
    expect(container.querySelector('.a-avatar-list')).toBeInTheDocument();
    expect(container.querySelector('.a-list')).not.toBeInTheDocument();
  });

  it('should render the user fields in an Avatar list', () => {
    const { getByText } = render(
      <FunctionalList type="avatar">
        <ListItemAvatar
          user={{ name: 'Albert Einstein', function: 'Genius', email: 'albert.einstein@antwerpen.be' }}
        ></ListItemAvatar>
      </FunctionalList>
    );
    expect(getByText('Albert Einstein')).toBeTruthy();
    expect(getByText('Genius')).toBeTruthy();
    expect(getByText('albert.einstein@antwerpen.be')).toBeTruthy();
  });

  it('should trigger onItemClick and onClick on children in Avatar lists', () => {
    const mockClick = jest.fn();
    const mockClick2 = jest.fn();
    const { getAllByRole } = render(
      <FunctionalList type="avatar" onItemClick={mockClick}>
        <ListItemAvatar link={{ href: '' }} />
        <ListItemAvatar link={{ href: '#' }} active onClick={mockClick2} />
      </FunctionalList>
    );
    fireEvent.click(getAllByRole('link')[0]);
    fireEvent.click(getAllByRole('link')[1]);
    expect(mockClick).toBeCalledTimes(1);
    expect(mockClick2).toBeCalledTimes(1);
  });
});
