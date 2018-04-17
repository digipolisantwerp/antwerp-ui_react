import React from 'react';
import classNames from 'classnames';
import Label from '../Label';

type Props = {
  id?: string,
  label?: string,
  value?: string,
  description?: string,
  required?: boolean,
  placeholder?: string,
};

const TextField = (props: Props) => {
  const {
    id,
    label,
    value,
    description,
    required,
    placeholder,
    onChange,
  } = props;

  const inputClass = classNames(
    'a-input',
    { 'is-required': !!required }
  );
  return (
    <div className={inputClass}>
      <Label htmlFor={id}>{label}</Label>
      <input type="text" id={id} placeholder={placeholder} value={value} onChange={onChange} />
      <small>{description}</small>
    </div>
  )
}

export default TextField;