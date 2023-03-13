import { ButtonProps } from './Button.types';
import { classNames } from '../../../utils/dom.utils';
import { DEFAULT_EMPHASIS, DEFAULT_SIZE, Emphasis, SIZE_MAP, Theme } from '../../../constants/layout.settings';
import { renderAddOn } from '../../../utils/render.utils';
import { useEffect } from 'react';
import { logWarning } from '../../../utils/log.utils';

export function Button({
  addOn,
  ariaLabel,
  children,
  className,
  emphasis,
  fullWidth,
  htmlType,
  id,
  onClick,
  qa,
  size,
  theme,
  title
}: ButtonProps) {
  const classObject = {
    'a-button': true,
    [`a-button--${SIZE_MAP[size || DEFAULT_SIZE]}`]: !!size,
    [`a-button--${theme}`]: !!theme && !(theme === Theme.NEUTRAL && emphasis === Emphasis.HIGH),
    'a-button--outlined': emphasis === Emphasis.MEDIUM,
    'a-button--text': emphasis === Emphasis.LOW,
    'a-button--full': !!fullWidth,
    'has-icon': addOn?.type === 'icon' && !['left', 'right'].includes(addOn?.align || ''),
    'has-icon-left': addOn?.type !== 'avatar' && addOn?.align === 'left',
    'has-icon-right':
      (addOn?.type !== 'avatar' && addOn?.align === 'right') || (addOn?.type === 'spinner' && addOn?.align !== 'left'),
    'has-avatar': addOn?.type === 'avatar',
    'has-avatar-with-inset': addOn?.type === 'avatar' && (!!addOn.avatarProps?.letter || !!addOn.avatarProps?.image),
    [`${className}`]: !!className
  };
  const classes = classNames(classObject);

  useEffect(() => {
    if (classObject['has-icon'] && !ariaLabel) logWarning('Using an Icon Button without an aria-label');
  }, [classObject]);

  return (
    <button
      id={id}
      className={classes}
      title={title}
      onClick={onClick}
      type={htmlType}
      aria-label={ariaLabel}
      data-qa={qa}
    >
      {renderAddOn(addOn, size)}
      {classObject['has-icon'] ? null : children}
    </button>
  );
}

Button.defaultProps = {
  htmlType: 'button',
  emphasis: DEFAULT_EMPHASIS
};

export default Button;
