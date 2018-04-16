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

  return (
    <div className={avatarClass} style={style}>
      {icon && <span className="a-avatar__icon">
        <Icon name={icon} />
      </span>}  
      {children}
    </div>
  )
}

export default Avatar;