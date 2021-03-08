import React from 'react';
import classNames from 'classnames';
import Icon from '../../icon';

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
  /** aria-label, defaults to 'Gebruikers icoon' */
  ariaLabel?: string,
  className?: string,
  children?: any,
  style?: object,
  /** Qa id */
  qa?: string,
};

const IconWrapper = ({ icon }) => (<span className="a-avatar__icon"><Icon name={icon} /></span>);
const LetterWrapper = ({ letter }) => (<span className="a-avatar__letter">{letter}</span>);

const Avatar = (props: Props) => {
  const { size, icon, children, style, letter, image, alt = '', className, qa, ariaLabel = 'Gebruiker icoon' } = props
  const avatarClass = classNames(
    'a-avatar',
    { [`${sizeClasses[size]}`]: !!size },
    className,
  );

  return (
    <div className={avatarClass} style={style} data-qa={qa}>
      {icon && <IconWrapper icon={icon} />}
      {letter && <LetterWrapper letter={letter} />}
      {image && <img src={image} alt={alt} />}
      {children}
      <span className="u-screen-reader-only">{ariaLabel}</span>
    </div>
  )
}

export default Avatar;
