import { classNames } from '../../../utils/dom.utils';
import { ButtonGroupProps } from './ButtonGroup.types';

export function ButtonGroup({ children, vertical, qa }: ButtonGroupProps) {
  const classes = classNames({
    'm-button-group': true,
    'm-button-group--vertical': !!vertical
  });
  return (
    <div className={classes} data-qa={qa}>
      {children}
    </div>
  );
}

export default ButtonGroup;
