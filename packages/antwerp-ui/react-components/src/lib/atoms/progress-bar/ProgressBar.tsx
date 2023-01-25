import { classNames } from '../../../utils/dom.utils';
import { ProgressBarProps } from './ProgressBar.types';

export function ProgressBar({ label, percentage, absoluteValue, minValue, maxValue, large, qa }: ProgressBarProps) {
  const value = absoluteValue || percentage;
  const classes = classNames({
    'a-progress': true,
    'a-progress--l': !!large
  });
  return (
    <div className={classes} data-qa={qa}>
      <div className="a-progress__label">{label}</div>
      <div className="a-progress__inner">
        <div
          className="a-progress__bar"
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={minValue}
          aria-valuemax={maxValue}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

ProgressBar.defaultProps = {
  percentage: 0,
  minValue: 0,
  maxValue: 100,
  size: ''
};

export default ProgressBar;
