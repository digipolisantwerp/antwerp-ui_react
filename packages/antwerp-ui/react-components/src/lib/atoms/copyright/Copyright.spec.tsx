import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Copyright } from './Copyright';
import { CopyrightProps } from './Copyright.types';

describe.only('UI Components - Atoms - Copyright', () => {
  const defaultProps: CopyrightProps = {
    sign: '©',
    qa: 'copyright'
  };

  it('should render a correct link', () => {
    const link = 'https://example.com';
    const { container } = render(<Copyright {...defaultProps} link={link} />);
    expect(container.innerHTML).toContain('href="https://example.com"');
  });

  it('should render a div element when the link prop is not set', () => {
    const { container } = render(<Copyright {...defaultProps} />);
    expect(container.innerHTML).toContain('<div class="a-copyright');
  });

  it('should renders a span element when the label prop is set', () => {
    const label = 'Example';
    const { container } = render(<Copyright {...defaultProps} label={label} />);
    expect(container.innerHTML).toContain('<span class="a-copyright__label">');
  });

  it('should set the aria-expanded attribute and calls the expand and shrink function in an image', () => {
    const { getByRole } = render(<Copyright {...defaultProps} forImage link="hello" />);
    const element = getByRole('link');
    expect(element).toHaveAttribute('aria-expanded', 'false');
    fireEvent.focus(element);
    expect(element).toHaveAttribute('aria-expanded', 'true');
    fireEvent.blur(element);
    expect(element).toHaveAttribute('aria-expanded', 'false');
    fireEvent.mouseEnter(element);
    expect(element).toHaveAttribute('aria-expanded', 'true');
    fireEvent.mouseLeave(element);
    expect(element).toHaveAttribute('aria-expanded', 'false');
  });

  it('should render a span element for the sign prop', () => {
    const sign = 'Copyright';
    const { getByRole } = render(<Copyright {...defaultProps} sign={sign} link="/test" />);
    const span = getByRole('link').querySelector('.a-copyright__sign');
    expect(span).toBeInTheDocument();
    expect(span).toHaveClass('a-copyright__sign');
    expect(span).toHaveTextContent(sign);
  });

  it('should apply the m-image__copyright class', () => {
    const { getByRole } = render(<Copyright {...defaultProps} link="/test" />);
    const element = getByRole('link');
    expect(element).toHaveClass('a-copyright');
    expect(element).toHaveClass('m-image__copyright');
  });

  it('should NOT apply the m-image__copyright class', () => {
    const { getByRole } = render(<Copyright {...defaultProps} forImage={false} link="/test" />);
    const element = getByRole('link');
    expect(element).toHaveClass('a-copyright');
    expect(element).not.toHaveClass('m-image__copyright');
  });
});
