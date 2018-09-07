// @flow

import React from 'react';
import classNames from 'classnames';

type Props = {
  children: Node,
  className?: string
};

const CardActions = ({
  children, className,
}: Props) => (
  <div className={classNames('pull-right u-margin-bottom-xs', className)}>
    {children}
  </div>
);

CardActions.defaultProps = {
  className: '',
};

export default CardActions;
