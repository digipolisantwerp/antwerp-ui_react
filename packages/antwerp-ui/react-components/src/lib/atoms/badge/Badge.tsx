import { BadgeProps } from './Badge.types';
import { classNames } from '../../../utils/dom.utils';

export function Badge({ ariaLabel, theme, type, children, qa }: BadgeProps) {
  const number = parseInt(children);
  const classes = classNames({
    'a-badge': true,
    [`a-badge--${theme}`]: !!theme,
    [`a-badge--${type}`]: !!type
  });
  return (
    <span className={classes} aria-label={ariaLabel} data-qa={qa}>
      {!isNaN(number) ? `${number}` : ''}
    </span>
  );
}

export default Badge;
