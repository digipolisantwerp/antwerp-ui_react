import { classNames } from '../../../../utils/dom.utils';
import { DEFAULT_SIZE, SIZE_MAPPING, State } from '../../../../constants/layout.settings';
import { Icon } from '../../../base/icon';
import { CharacterCounterProps, DescriptionProps, LabelProps, TextFieldProps } from './TextField.types';
import { useState } from 'react';

const renderLabel = ({ label, id, required, inline }: LabelProps) => {
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

const renderDescription = ({ description, state }: DescriptionProps) => {
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

const renderCharacterCounter = ({ charCounter, characterCount, maxLength }: CharacterCounterProps) => {
  return charCounter && maxLength ? (
    <small aria-live="polite" className="a-input__description u-text-right">
      {`${characterCount} / ${maxLength}`}
    </small>
  ) : null;
};

export function TextField({
  addonLeft,
  addonRight,
  charCounter,
  description,
  disabled,
  iconLeft,
  iconRight,
  id,
  inline,
  label,
  maxLength,
  name,
  onChange,
  qa,
  readOnly,
  required,
  size,
  state,
  type = 'text',
  value,
  ...extraProps
}: TextFieldProps) {
  const [characterCount, setCharacterCount] = useState(value ? value.length : 0);

  const classes = classNames({
    'a-input': true,
    'a-input--inline': !!inline,
    [`a-input--${SIZE_MAPPING[size || DEFAULT_SIZE]}`]: !!size,
    'has-icon-left': !!iconLeft,
    'has-icon-right': !iconLeft && !!iconRight,
    'has-addon-left': !!addonLeft,
    'has-addon-right': !!addonRight,
    'has-error': state === 'error'
  });

  const _handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCharacterCount(e.target.value.length);
    return onChange && onChange(e);
  };

  return (
    <div className={classes} data-qa={qa}>
      {renderLabel({ label, id, required, inline })}
      {renderDescription({ description, state })}
      <div className="a-input__wrapper">
        {!!iconLeft && <Icon name={iconLeft} />}
        {!!addonLeft && <div className="a-input__addon">{addonLeft}</div>}
        <input
          type={type}
          value={value}
          name={name}
          id={id}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          maxLength={maxLength}
          onChange={_handleChange}
          {...extraProps}
        ></input>
        {!!iconRight && !iconLeft && <Icon name={iconRight} />}
        {!!addonRight && <div className="a-input__addon">{addonRight}</div>}
      </div>
      {renderCharacterCounter({ charCounter, characterCount: value ? value.length : characterCount, maxLength })}
    </div>
  );
}

TextField.defaultProps = {
  type: 'text'
};

export default TextField;
