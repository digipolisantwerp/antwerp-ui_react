import { classNames } from '../../../utils/dom.utils';
import { ImageProps } from './Image.types';

export function Image({ alt, children, src, noClass, qa }: ImageProps) {
  const classes = classNames({
    'm-image': !noClass
  });
  return (
    <figure className={classes} data-qa={qa}>
      <img src={src} alt={alt} />
      {children}
    </figure>
  );
}

Image.defaultProps = { alt: '' };

export default Image;
