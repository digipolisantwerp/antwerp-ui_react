// @flow

import React from 'react';
import classNames from 'classnames';

type Props = {
  src: string,
  className?: string,
  alt?: string,
};

const CardImage = ({
  src, alt, className,
}: Props) => (
  <div className={classNames('pull-left u-margin-right', className)}>
    <div className="a-avatar a-avatar--small">
      <img src={src} alt={alt} />
    </div>
  </div>
);

CardImage.defaultProps = {
  className: '',
  alt: 'Default Alt',
};

export default CardImage;
