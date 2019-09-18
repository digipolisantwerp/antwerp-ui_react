// @flow

import React from 'react';
import classNames from 'classnames';

type Props = {
  icon: string,
  className?: string,
  ariaLabel: string,
}

const CardIcon = ({ icon, className , ariaLabel }: Props) => (
  <div className={classNames('pull-left u-margin-right u-margin-bottom', className)}>
    <span className={classNames('fa fa-lg u-text-light', icon)}>
      <span className="u-screen-reader-only">{ariaLabel}</span>
    </span>
  </div>
);

CardIcon.defaultProps = {
  className: ''
};

export default CardIcon;
