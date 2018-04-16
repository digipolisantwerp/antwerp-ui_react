import React from 'react';
import classNames from 'classnames';
import Label from '../Label';

const TextField = ({
  id,
  label,
  value,
  description,
  required,
  placeholder,
}) => {
  const inputClass = classNames(
    'a-input',
    { 'is-required': !!required }
  );
  return (
    <div className={inputClass}>
      <Label htmlFor={id}>{label}</Label>
      <input type="text" id={id} placeholder={placeholder} value={value} />
      <small>{description}</small>
    </div>
  )
}

export default TextField;