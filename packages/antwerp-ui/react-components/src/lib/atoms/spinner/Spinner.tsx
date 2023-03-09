import { SpinnerProps } from './Spinner.types';
import { classNames } from '../../../utils/dom.utils';
import { SCREEN_READER_CLASS } from '../../../constants/settings';
import { DEFAULT_SIZE, SIZE_MAP } from '../../../constants/layout.settings';

export function Spinner({ label, showText, size, vertical, qa }: SpinnerProps) {
  const classes = classNames({
    'a-spinner': true,
    [`a-spinner--${SIZE_MAP[size || DEFAULT_SIZE]}`]: !!size,
    'a-spinner--vertical': !!vertical
  });

  return (
    <div className={classes} data-qa={qa}>
      <span className="a-spinner__circle" role="alert" aria-busy="true" aria-label={label}></span>
      <span className={`${showText ? 'a-spinner__text' : SCREEN_READER_CLASS}`}>{label}</span>
    </div>
  );
}

Spinner.defaultProps = {
  label: 'Wordt geladen...'
};

export default Spinner;
