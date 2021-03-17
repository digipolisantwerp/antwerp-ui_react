import React from 'react';
import Radio from './Radio';
import InputLabel from '../InputLabel';
import classNames from 'classnames';

type RadioOption = {
  label: string,
  value: string,
  key?: string,
  disabled?: boolean,
};

type Props = {
  id?: string,
  name?: string,
  label?: string,
  description?: string,
  value?: string,
  className?: string,
  style?: object,
  required?: boolean,
  onChange?: (e: object) => void,
  inline?: boolean,
  options?: Array<Option>,
  /** Qa id */
  qa?: string,
};

const RadioGroup = (props: Props) => {
  const {
    id,
    name,
    label,
    value,
    className,
    description,
    style,
    required,
    onChange,
    inline,
    options,
    qa,
  } = props;
  const radioGroupClass = classNames(
    'a-input',
    className,
    {
      'is-required': !!required,
    }
  );
  return (
    <div className={radioGroupClass} style={style} onChange={onChange} data-qa={qa}>
      {label && <InputLabel inline={inline}>{label}</InputLabel>}
      <div className="a-input__wrapper">
        {options.map((option) => (
          <Radio
            value={option.value}
            key={option.key || `${name}_${option.value}`}
            id={option.key || `${name}_${option.value}`}
            name={name}
            disabled={option.disabled}
            checked={value === option.value}
            required={required}>
            {option.label}
          </Radio>
        ))}
      </div>
      {description ? <small>{description}</small> : null}
    </div>
  )
};

export default RadioGroup;
