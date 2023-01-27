import jest from 'jest-mock';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Footer } from './Footer';
import { FooterProps } from './Footer.types';

describe('UI Components - Organisms - Footer', () => {
  const ariaLabel = 'To top';
  const qa = 'footer-1';
  const items = [
    { label: 'Hello' },
    { label: 'Privacy', href: 'https://www.test.com/' },
    { label: 'Toegankelijkheid', href: 'https://www.test.com/' },
    { label: 'Cookie instellingen', href: 'https://www.test.com/' }
  ];
  const defaultProps: FooterProps = {
    qa: qa,
    items: items
  };

  it('should render successfully', () => {
    const { baseElement } = render(<Footer />);
    expect(baseElement).toBeTruthy();
  });

  it('should render a footer element with the correct className and data-qa attribute', () => {
    const { container } = render(<Footer {...defaultProps} />);
    expect(container.querySelector('.o-footer')).toHaveClass('o-footer');
    expect(container.querySelector('.o-footer')).toHaveAttribute('data-qa', qa);
  });

  it('should render an element containing the passed in items', () => {
    const { container } = render(<Footer {...defaultProps} />);
    expect(container.innerHTML).toContain(items[0].label);
    expect(container.innerHTML).toContain(items[1].label);
    expect(container.innerHTML).toContain(items[2].label);
    expect(container.innerHTML).toContain(items[1].href);
    expect(container.innerHTML).toContain(items[2].href);
    expect(container.innerHTML).toContain(items[3].href);
  });

  it('should not render an anchor tag if no href was given in the items', () => {
    const newItems = [{ label: 'Privacy', href: '' }];
    const { container } = render(<Footer {...defaultProps} items={newItems} />);
    expect(container.querySelector('a')).not.toBeInTheDocument();
  });

  it('should render a Button component when the backToTop prop is true', () => {
    defaultProps.backToTop = true;
    defaultProps.backToTopAriaLabel = ariaLabel;
    const { container } = render(<Footer {...defaultProps} />);
    const button = container.querySelector('.o-footer')?.querySelector('button');
    expect(button).toHaveClass('o-footer__button');
    expect(button).toHaveAttribute('aria-label', ariaLabel);
    expect(button).toHaveClass('a-button--secondary');
  });

  it('should not render a Button component when the backToTop prop is false', () => {
    defaultProps.backToTop = false;
    const { container } = render(<Footer {...defaultProps} />);
    expect(container.querySelector('button')).not.toBeInTheDocument();
  });

  it('should call scrollToTop function when the Button component is clicked', () => {
    window.scrollTo = jest.fn();
    defaultProps.backToTop = true;
    const { container } = render(<Footer {...defaultProps} />);
    const button = container.querySelector('.o-footer')?.querySelector('button') as HTMLButtonElement;
    fireEvent.click(button);
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});
