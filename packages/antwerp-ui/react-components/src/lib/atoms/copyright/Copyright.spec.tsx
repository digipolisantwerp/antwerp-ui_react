import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Copyright } from './Copyright';
import { CopyrightProps } from './Copyright.types';

describe('UI Components - Atoms - Copyright', () => {
  const defaultProps: CopyrightProps = {
    sign: '©',
    qa: 'copyright'
  };

  it('should render a correct link', () => {
    const link = 'https://example.com';
    const { getByTestId } = render(<Copyright {...defaultProps} link={link} />);
    const anchor = getByTestId('copyright');
    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveClass('a-copyright');
    expect(anchor).toHaveAttribute('href', link);
  });

  it('should render a div element when the link prop is not set', () => {
    const { getByTestId } = render(<Copyright {...defaultProps} />);
    const div = getByTestId('copyright');
    expect(div).toBeInTheDocument();
    expect(div).toHaveClass('a-copyright');
  });

  it('should renders a span element when the label prop is set', () => {
    const label = 'Example';
    const { getByTestId } = render(<Copyright {...defaultProps} label={label} />);
    const span = getByTestId('copyright-label');
    expect(span).toBeInTheDocument();
    expect(span).toHaveClass('a-copyright__label');
    expect(span).toHaveTextContent(label);
  });

  it('should set the aria-expanded attribute and calls the expand and shrink function in an image', () => {
    const { getByTestId } = render(<Copyright {...defaultProps} forImage />);
    const element = getByTestId('copyright');
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
    const { getByTestId } = render(<Copyright {...defaultProps} sign={sign} />);
    const span = getByTestId('copyright').querySelector('.a-copyright__sign');
    expect(span).toBeInTheDocument();
    expect(span).toHaveClass('a-copyright__sign');
    expect(span).toHaveTextContent(sign);
  });

  it('should apply the m-image__copyright class', () => {
    const { getByTestId } = render(<Copyright {...defaultProps} />);
    const element = getByTestId('copyright');
    expect(element).toHaveClass('a-copyright');
    expect(element).toHaveClass('m-image__copyright');
  });

  it('should NOT apply the m-image__copyright class', () => {
    const { getByTestId } = render(<Copyright {...defaultProps} forImage={false} />);
    const element = getByTestId('copyright');
    expect(element).toHaveClass('a-copyright');
    expect(element).not.toHaveClass('m-image__copyright');
  });
});
