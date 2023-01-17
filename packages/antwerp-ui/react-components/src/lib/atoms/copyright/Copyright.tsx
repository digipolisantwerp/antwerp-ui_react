import { useState } from 'react';
import { classNames } from '../../../utils/dom.utils';
import { CopyrightProps } from './Copyright.types';

export function Copyright({ sign, label, link, forImage, qa }: CopyrightProps) {
  const [expanded, setExpanded] = useState(false);
  const expand = () => forImage && setExpanded(true);
  const shrink = () => forImage && setExpanded(false);

  const classes = classNames({
    'a-copyright': true,
    'm-image__copyright': !!forImage
  });
  const ElementTag = `${link ? 'a' : 'div'}` as keyof JSX.IntrinsicElements;

  return (
    <ElementTag
      href={link}
      className={classes}
      aria-expanded={!!(forImage && expanded)}
      data-testid={qa}
      data-qa={qa}
      onFocus={expand}
      onBlur={shrink}
      onMouseEnter={expand}
      onMouseLeave={shrink}
    >
      <span className="a-copyright__sign">{sign}</span>
      {label ? (
        <span className="a-copyright__label" data-testid="copyright-label">
          {label}
        </span>
      ) : null}
    </ElementTag>
  );
}

Copyright.defaultProps = {
  forImage: true,
  sign: '©'
};

export default Copyright;
