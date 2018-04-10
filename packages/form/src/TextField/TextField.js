import React from 'react';
import classNames from 'classnames';

const TextField = ({
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
      <label class="a-input__label" for="text-field">{label}</label>
      <input type="text" name="text-field" id="text-field" placeholder={placeholder} />
      <small>{description}</small>
    </div>
  )
}

export default TextField;