import React from 'react';
import classNames from 'classnames';

const typeClasses = {
  primary: 'a-badge--primary',
  secondary: 'a-badge--secondary',
  success: 'a-badge--success',
  warning: 'a-badge--warning',
  danger: 'a-badge--danger'
};

type BadgeTypes = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

type Props = {
  type?: BadgeTypes,
  className?: string,
  style?: object,
  children?: any
};

const Badge = (props: Props) => {
  const { type, className, style = {}, children } = props
  const badgeClass = classNames(
    'a-badge',
    className,
    { [`${typeClasses[type]}`]: !!type },
  );

  return <span className={badgeClass} style={style}>{children}</span>
}

export default Badge;