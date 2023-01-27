import { classNames } from '../../../../utils/dom.utils';
import { DEFAULT_SIZE, SIZE_MAP, State } from '../../../../constants/layout.settings';
import { useState } from 'react';
import { renderCharacterCounter, renderDescription, renderLabel } from '../input.renders';
import { TextAreaProps } from '../Input.types';

export function TextArea({
  charCounter,
  description,
  disabled,
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
  value,
  ...extraProps
}: TextAreaProps) {
  const [characterCount, setCharacterCount] = useState(value ? value.length : 0);
  const wrapperClasses = classNames({
    'a-input': true,
    'a-input--inline': !!inline,
    [`a-input--${SIZE_MAP[size || DEFAULT_SIZE]}`]: !!size,
    'has-error': state === State.ERROR
  });

  const _handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharacterCount(event.target.value.length);
    return onChange && onChange(event);
  };

  return (
    <div className={wrapperClasses} data-qa={qa}>
      {renderLabel({ label, id, required, inline })}
      {renderDescription({ description, state })}
      <div className="a-input__wrapper">
        <textarea
          value={value}
          name={name}
          id={id}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          aria-describedby="text-field-description"
          maxLength={maxLength}
          onChange={_handleChange}
          {...extraProps}
        ></textarea>
      </div>
      {renderCharacterCounter({ charCounter, characterCount: value ? value.length : characterCount, maxLength })}
    </div>
  );
}

export default TextArea;
