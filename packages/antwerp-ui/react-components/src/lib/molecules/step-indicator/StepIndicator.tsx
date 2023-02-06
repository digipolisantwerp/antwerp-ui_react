import { classNames } from '../../../utils/dom.utils';
import { Step, StepIndicatorProps } from './StepIndicator.types';
import { wrapWithIf } from '../../../utils/render.utils';
import { MouseEvent } from 'react';

export function StepIndicator({
  steps,
  onStepClick,
  screenReaderStepLabel,
  screenReaderCompleteLabel,
  qa
}: StepIndicatorProps) {
  const handleStepClick = (event: MouseEvent<HTMLAnchorElement>, index: number, stepId: string) => {
    if (onStepClick) {
      event.preventDefault();
      onStepClick(stepId, index);
    }
  };

  return (
    <ol className="m-step-indicator" data-qa={qa}>
      {steps?.map((step: Step, index) => {
        const classes = classNames({
          'is-completed': !!step.complete,
          'is-incompleted': !step.complete,
          'is-active': !!step.active
        });
        return (
          <li key={step.id || index} className={classes}>
            {wrapWithIf(
              <>
                <span className="u-screen-reader-only">{screenReaderStepLabel}</span>
                <span className="m-step-indicator__number"></span>
                <span className="m-step-indicator__label">
                  {step.label || null}
                  {step.complete ? <span className="u-screen-reader-only">{screenReaderCompleteLabel}</span> : null}
                </span>
              </>,
              // eslint-disable-next-line jsx-a11y/anchor-has-content
              <a onClick={(e) => handleStepClick(e, index, step?.id)} href={step.link?.href}></a>,
              !!step.link?.href
            )}
          </li>
        );
      })}
    </ol>
  );
}

StepIndicator.defaultProps = {
  steps: [],
  screenReaderStepLabel: 'Stap ',
  screenReaderCompleteLabel: ' (voltooid)'
};

export default StepIndicator;
