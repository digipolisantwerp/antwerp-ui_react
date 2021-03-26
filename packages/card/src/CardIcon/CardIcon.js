// @flow

import React from 'react';
import classNames from 'classnames';
import Icon from '../../../icon/src/Icon';

type Props = {
  icon: string,
  className?: string,
  ariaLabel?: string,
};

const CardIcon = ({ icon, className , ariaLabel }: Props) => (
  <span className={classNames('pull-left u-margin-right u-margin-bottom', className)}>
    <Icon name={icon} className="fa-lg u-text-light" ariaLabel={ariaLabel} />
  </span>
);

CardIcon.defaultProps = {
  icon: '',
  className: '',
  ariaLabel: ''
};

export default CardIcon;
