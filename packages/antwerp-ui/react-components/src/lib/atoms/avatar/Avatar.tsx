import { AvatarProps, DEFAULT_AVATAR_ICON } from './Avatar.types';
import { classNames } from '../../../utils/dom.utils';

// TODO-NT REPLACE ICON BY ICON COMPONENT
const letterAvatar = (letter: string) => <span className="a-avatar__letter">{letter}</span>;
const imageAvatar = (image: string, alt: string) => <img src={`${image}`} alt={`${alt}`} />;
const iconAvatar = (icon: string) => (
  <span className="a-avatar__icon">
    <span className="ai" aria-hidden="true">
      <svg>
        <use href={`#ai-${icon}`}></use>
      </svg>
    </span>
  </span>
);

export function Avatar({ letter, rounded, size, ariaLabel, image, imageAlt, icon, qa }: AvatarProps) {
  const renderContent = () => {
    if (image) {
      return imageAvatar(image, imageAlt);
    }
    if (letter) {
      return letterAvatar(letter);
    }
    return iconAvatar(icon || DEFAULT_AVATAR_ICON);
  };
  const classes = classNames({
    'a-avatar': true,
    'a-avatar--primary': !!letter,
    'a-avatar--rounded': !!rounded,
    [`a-avatar--${(size || '')[0]}`]: !!size
  });
  return (
    <div className={classes} aria-label={ariaLabel} data-qa={qa}>
      {renderContent()}
    </div>
  );
}

Avatar.defaultProps = {
  ariaLabel: 'Gebruiker icoon',
  imageAlt: 'Avatar afbeelding'
};

export default Avatar;
