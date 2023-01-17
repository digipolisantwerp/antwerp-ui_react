import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Image } from './Image';
import { ImageProps } from './Image.types';
import { Copyright } from '../../atoms/copyright/Copyright';

describe('Image', () => {
  const alt = 'An image';
  const src = 'https://placedog.net/400/300?r';
  const qa = 'image';
  const defaultProps: ImageProps = {
    alt: alt,
    src: src,
    qa: qa
  };

  it('renders the image with the correct src and alt attributes', () => {
    render(<Image {...defaultProps} />);
    const img = screen.getByAltText(alt);
    expect(img).toHaveAttribute('src', src);
  });

  it('renders the correct data-qa attribute', () => {
    const { getByTestId } = render(<Image {...defaultProps} />);
    const img = getByTestId(qa);
    expect(img).toHaveAttribute('data-qa', qa);
  });

  it('renders the image with a copyright as a child', () => {
    const { getByTestId } = render(
      <Image {...defaultProps}>
        <Copyright sign="©" label="All rights reserved" link="https://www.google.be/" qa="copyright" />
      </Image>
    );
    const copyright = getByTestId('copyright');
    expect(copyright).toHaveAttribute('href', 'https://www.google.be/');
  });
});
