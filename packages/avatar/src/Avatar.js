import React from 'react';
import classNames from 'classnames';
import Icon from '../../icon/src/Icon';

const sizeClasses = {
  small: 'a-avatar--small',
  medium: 'a-avatar--medium',
  large: 'a-avatar--large'
};

type AvatarSizes = 'small' | 'medium' | 'large';

type Props = {
  /** Avatar size ("small")  */
  size?: AvatarSizes,
  /** Font Awesome icon name */
  icon?: string,
  letter?: string,
  image?: string,
  alt?: string,
  className?: string,
  children?: any,
  style?: object,
};

const IconWrapper = ({ icon }) => (<span className="a-avatar__icon"><Icon name={icon} /></span>);
const LetterWrapper = ({ letter }) => (<span className="a-avatar__letter">{letter}</span>);

const Avatar = (props: Props) => {
  const { size, icon, children, style, letter, image, alt = '', className } = props
  const avatarClass = classNames(
    'a-avatar',
    { [`${sizeClasses[size]}`]: !!size },
    className,
  );

  return (
    <div className={avatarClass} style={style}>
      {icon && <IconWrapper icon={icon} />}
      {letter && <LetterWrapper letter={letter} />}
      {image && <img src={image} alt={alt} />}
      {children}
    </div>
  )
}

export default Avatar;