import { Avatar } from '../avatar';
import { ButtonProps } from './Button.types';
import { classNames } from '../../../utils/dom.utils';
import { DEFAULT_SIZE, Size, SIZE_MAP, Theme } from '../../../constants/layout.settings';
import { Icon } from '../../base/icon';
import { Spinner } from '../spinner';

export function Button({
  ariaLabel,
  avatar,
  children,
  className,
  fullWidth,
  htmlType,
  icon,
  iconLeft,
  iconRight,
  id,
  onClick,
  outline,
  qa,
  size,
  spinner,
  theme,
  title,
  transparent
}: ButtonProps) {
  const classes = classNames({
    'a-button': true,
    [`a-button--${SIZE_MAP[size || DEFAULT_SIZE]}`]: !!size,
    [`a-button--${theme}`]: !!theme && !(theme === Theme.NEUTRAL && !(outline || transparent)),
    'a-button--outlined': !!outline,
    'a-button--text': !!transparent,
    'a-button--full': !!fullWidth,
    'has-icon': !!icon,
    'has-icon-left': !!iconLeft && !avatar,
    'has-icon-right': (!!iconRight || !!spinner) && !avatar,
    'has-avatar': !!avatar && (!avatar?.image || !avatar?.letter),
    'has-avatar-with-inset': !!avatar?.image || !!avatar?.letter,
    [`${className}`]: !!className
  });

  const renderAddOn = (): JSX.Element | null => {
    const iconType = icon || iconLeft || iconRight;
    if (avatar) {
      return <Avatar {...avatar} size={size} />;
    } else if (spinner) {
      return <Spinner size={size === Size.S ? Size.XS : Size.S} />;
    } else if (iconType) {
      return <Icon name={iconType} />;
    }
    return null;
  };

  return (
    <button
      id={id}
      className={classes}
      title={title}
      onClick={onClick}
      type={htmlType}
      aria-label={ariaLabel}
      aria-hidden={spinner ? true : undefined}
      data-qa={qa}
    >
      {renderAddOn()}
      {!icon && children}
    </button>
  );
}

Button.defaultProps = {
  htmlType: 'button'
};

export default Button;
