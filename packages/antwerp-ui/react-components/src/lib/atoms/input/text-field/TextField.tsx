import { TextFieldProps } from '../Input.types';
import { classNames } from '../../../../utils/dom.utils';
import { DEFAULT_SIZE, SIZE_MAPPING } from '../../../../constants/layout.settings';
import { Icon } from '../../../base/icon';
import { renderCharacterCounter, renderDescription, renderLabel } from '../input.renders';
import { useState } from 'react';

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
