import React from 'react';
import classNames from 'classnames';
import Icon from '../../icon';

const sizeClasses = {
  small: 'a-avatar--small'
};

type AvatarSize = "small";

type Props = {
  /** Avatar size ("small")  */
  size: AvatarSizes,
  /** Font Awesome icon name */
  icon: string,
  children: any,
  style: object,
};

const Avatar = (props: Props) => {
  const { size, icon, children, style } = props
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