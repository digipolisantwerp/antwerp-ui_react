import { SpinnerProps } from './Spinner.types';
import { classNames } from '../../../utils/dom.utils';

export function Spinner({ label, showText, size, vertical, qa }: SpinnerProps) {
  const classes = classNames({
    'a-spinner': true,
    [`a-spinner--${(size || '')[0]}`]: !!size,
    'a-spinner--vertical': !!vertical
  });
  return (
    <div className={classes} role="alert" data-qa={qa}>
      <span className="a-spinner__circle"></span>
      <span className={`${showText ? 'a-spinner__text' : 'u-screen-reader-only'}`}>{label}</span>
    </div>
  );
}

Spinner.defaultProps = {
  label: 'Wordt geladen...'
};

export default Spinner;
