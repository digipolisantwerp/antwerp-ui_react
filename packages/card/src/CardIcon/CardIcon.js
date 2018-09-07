// @flow

import React from 'react';
import classNames from 'classnames';

type Props = {
  icon: string,
  className?: string
};

const CardIcon = ({
  icon, className,
}: Props) => (
  <div className={classNames('pull-left u-margin-right u-margin-bottom', className)}>
    <i className={classNames('fa fa-lg u-text-light', icon)} />
  </div>
);

CardIcon.defaultProps = {
  className: '',
};

export default CardIcon;
