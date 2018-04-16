import React from 'react';
import Radio from './Radio';
import Label from '../Label';
import classNames from 'classnames';

type RadioOption = {
  label: string,
  value: string,
  disabled?: boolean,
};

type Props = {
  id?: string,
  name?: string,
  label?: string,
  value?: string,
  className?: string,
  style?: object,
  required?: boolean,
  onChange?: (e: object) => void,
  inline?: boolean,
  options?: Array<Option>,
};

const RadioGroup = (props: Props) => {
  const {
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
  } = props;
  const radioGroupClass = classNames(
    'a-input',
    {
      'is-required': !!required,
    }
  );
  return (
    <div className={radioGroupClass} style={style} onChange={onChange}>
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
