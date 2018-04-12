import React from 'react';
import classNames from 'classnames';
import Icon from '../../icon';

const sizeClasses = {
  small: 'a-avatar--small'
};

const Avatar = ({ size, icon, children, style }) => {
  const avatarClass = classNames(
    'a-avatar',
    { [`${sizeClasses[size]}`]: !!size },
  );

  const iconComponent = icon ? (<Icon name={icon} />) : null;
  return (
    <div class={avatarClass} style={style}>
      {iconComponent}
      {children}
    </div>
  )
}

export default Avatar;