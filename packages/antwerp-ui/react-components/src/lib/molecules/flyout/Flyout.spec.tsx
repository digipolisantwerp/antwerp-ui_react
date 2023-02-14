import { render, fireEvent, screen } from '@testing-library/react';
import Button from '../../atoms/button/Button';
import jest from 'jest-mock';
import { Flyout } from './Flyout';

describe('UI Components - Molecules - Flyout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Flyout trigger={<Button>Open flyout</Button>} />);
    expect(baseElement).toBeTruthy();
  });

  it('should not render if no trigger is provided', () => {
    const { baseElement } = render(<Flyout />);
    expect(baseElement).toBeTruthy();
    expect(baseElement.innerHTML).toEqual('<div></div>');
  });

  it('should open the flyout when the trigger element is clicked', () => {
    const { baseElement } = render(<Flyout trigger={<Button>Open Flyout</Button>} />);
    fireEvent.click(screen.getByText('Open Flyout'));
    expect(baseElement.getElementsByClassName('m-flyout')[0].className.includes('is-open')).toBeTruthy();
  });

  it('should render an open flyout when open is set to true', () => {
    const { baseElement } = render(<Flyout trigger={<Button>Open Flyout</Button>} open />);
    expect(baseElement.getElementsByClassName('m-flyout')[0].className.includes('is-open')).toBeTruthy();
  });

  it('should not close the flyout if it is uncontrolled', () => {
    const onStateChange = jest.fn();
    const { container, baseElement } = render(
      <Flyout trigger={<Button>Open Flyout</Button>} open={true} onStateChange={onStateChange} />
    );
    fireEvent.click(container);
    expect(onStateChange).toHaveBeenCalledWith(false);
    expect(baseElement.getElementsByClassName('m-flyout')[0].className.includes('is-open')).toBeTruthy();
  });

  it(`should add the 'u-text-right' class`, () => {
    const bottomRight = render(<Flyout trigger={<Button>Open Flyout</Button>} orientation="bottom-right" />);
    const upperRight = render(<Flyout trigger={<Button>Open Flyout</Button>} orientation="upper-right" />);
    expect(bottomRight.baseElement.getElementsByClassName('u-text-right')).toBeTruthy();
    expect(upperRight.baseElement.getElementsByClassName('u-text-right')).toBeTruthy();
  });

  it(`should add the 'm-flyout--s' class`, () => {
    const { baseElement } = render(<Flyout trigger={<Button>Open Flyout</Button>} size="small" />);
    expect(baseElement.getElementsByClassName('m-flyout--s')).toBeTruthy();
  });

  it('should set the data-qa attribute', () => {
    const { baseElement } = render(<Flyout trigger={<Button>Open Flyout</Button>} qa="id-1234" />);
    expect(baseElement.getElementsByClassName('m-flyout')[0]?.getAttribute('data-qa') === 'id-1234').toBeTruthy();
  });

  it('should call onStateChange when state of the flyout changes', () => {
    const onStateChange = jest.fn();
    const { getByText } = render(<Flyout trigger={<Button>Open Flyout</Button>} onStateChange={onStateChange} />);
    fireEvent.click(getByText('Open Flyout'));
    expect(onStateChange).toHaveBeenCalledWith(true);
    fireEvent.click(getByText('Open Flyout'));
    expect(onStateChange).toHaveBeenCalledWith(false);
  });
});
