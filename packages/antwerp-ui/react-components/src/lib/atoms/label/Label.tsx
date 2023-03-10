import { classNames } from '../../../utils/dom.utils';
import { LabelProps } from './Label.types';

export function Label({ children, type, qa }: LabelProps) {
  const classes = classNames({
    'a-label': true,
    [`a-label--${[type]}`]: !!type
  });

  return (
    <span className={classes} data-qa={qa}>
      {children}
    </span>
  );
}

export default Label;
