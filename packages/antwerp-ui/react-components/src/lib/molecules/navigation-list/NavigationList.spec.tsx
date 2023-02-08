import jest from 'jest-mock';
import { NavigationList } from './NavigationList';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('UI Components - Molecules - Navigation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationList />);
    expect(baseElement).toBeTruthy();
  });

  it('should be a tab navigation by default', () => {
    const { baseElement } = render(<NavigationList />);
    expect(baseElement.getElementsByClassName('m-nav-tabs')).toBeTruthy();
  });

  it('should be a list navigation when direction is vertical', () => {
    const { baseElement } = render(<NavigationList direction="vertical" />);
    expect(baseElement.getElementsByClassName('m-nav-list')).toBeTruthy();
  });

  it('should render active items', () => {
    const { baseElement } = render(
      <NavigationList items={[{ active: true, id: '1', label: 'Active' }]} direction="horizontal" />
    );
    expect(baseElement.getElementsByClassName('is-active')).toBeTruthy();
  });

  it('should render disabled items', () => {
    const { baseElement } = render(
      <NavigationList items={[{ disabled: true, id: '1', label: 'Disabled' }]} direction="horizontal" />
    );
    expect(baseElement.getElementsByClassName('is-disabled')).toBeTruthy();
  });

  it('should call onItemClick', () => {
    const mockClick = jest.fn();
    const { getByRole } = render(
      <NavigationList onItemClick={mockClick} items={[{ id: '1', label: 'Active' }]} direction="horizontal" />
    );
    fireEvent.click(getByRole('listitem').children[0]);
    expect(mockClick).toBeCalledTimes(1);
  });
});
