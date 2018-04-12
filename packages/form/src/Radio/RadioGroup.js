import React from 'react';
import Radio from './Radio';
import Label from '../Label';
import classNames from 'classnames';

const RadioGroup = ({
  id,
  name,
  label,
  value,
  className,
  style,
  required,
  onChange,
  inline,
  options,
}) => {
  const radioGroupClass = classNames(
    'a-input',
    {
      'is-required': !!required,
    }
  );
  return (
    <div class={radioGroupClass} style={style} onChange={onChange}>
      <Label inline={inline} htmlFor={id}>{label}</Label>
      {options.map(option => (
        <Radio
          value={option.value}
          key={option.value}
          id={option.value}
          name={name}
          disabled={option.disabled}
          checked={option.checked}>
          {option.label}
        </Radio>
      ))}
    </div>
  )
}

export default RadioGroup;
