import { BadgeProps } from './Badge.types';
import { classNames } from '../../../utils/dom.utils';
import { useEffect } from 'react';
import { DEFAULT_EMPHASIS, EMPHASIS_MAP } from '../../../constants/layout.settings';
import { logWarning } from '../../../utils/log.utils';

export function Badge({ ariaLabel, theme, emphasis, children, qa }: BadgeProps) {
  const number = parseInt(children);

  const classes = classNames({
    'a-badge': true,
    [`a-badge--${theme}`]: !!theme,
    [`a-badge--${EMPHASIS_MAP[emphasis || DEFAULT_EMPHASIS]}`]: !!EMPHASIS_MAP[emphasis || DEFAULT_EMPHASIS]
  });

  useEffect(() => {
    if (isNaN(number)) {
      logWarning('Using the Badge Component with a non-numerical value');
    }
  }, [children]);

  return (
    <span className={classes} aria-label={ariaLabel} data-qa={qa}>
      {!isNaN(number) ? `${number}` : ''}
    </span>
  );
}

export default Badge;
