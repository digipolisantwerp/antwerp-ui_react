import { ImageProps } from './Image.types';

export function Image({ alt, children, src, qa }: ImageProps) {
  return (
    <figure className="m-image" data-qa={qa} data-testid={qa}>
      <img src={src} alt={alt} />
      {children}
    </figure>
  );
}

Image.defaultProps = { alt: '' };

export default Image;
