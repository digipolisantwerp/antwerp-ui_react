import { State } from '../../../constants/layout.settings';
import { classNames } from '../../../utils/dom.utils';
import { Icon } from '../../base/icon';
import { DescriptionProps, LabelProps, CharacterCounterProps } from './Input.types';

export const renderLabel = ({ label, id, required, inline }: LabelProps) => {
  const labelClasses = classNames({
    'a-input__label': true,
    'a-input__label--inline': !!inline
  });
  return label ? (
    <label className={labelClasses} htmlFor={id}>
      {label}
      {required && <span className="u-text-danger">*</span>}
    </label>
  ) : null;
};

export const renderDescription = ({ description, state }: DescriptionProps) => {
  const descriptionClasses = classNames({
    'a-input__description': true,
    'is-error': state === State.ERROR,
    'is-success': state === State.SUCCESS
  });
  return description ? (
    <small className={descriptionClasses}>
      {state === State.SUCCESS && <Icon name="check-1" />}
      {state === State.ERROR && <Icon name="alert-triangle" />}
      {description}
    </small>
  ) : null;
};

export const renderCharacterCounter = ({ charCounter, characterCount, maxLength }: CharacterCounterProps) => {
  return charCounter && maxLength ? (
    <small aria-live="polite" className="a-input__description u-text-right">
      {`${characterCount} / ${maxLength}`}
    </small>
  ) : null;
};
