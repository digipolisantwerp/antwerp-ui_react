import React from 'react';
import classNames from 'classnames';

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
    <div class={inputClass}>
      <label class="a-input__label" htmlFor={id}>{label}</label>
      <input type="text" id={id} placeholder={placeholder} />
      <small>{description}</small>
    </div>
  )
}

export default TextField;