import React from 'react';
import classNames from 'classnames';

const Checkbox = ({
  id,
  label,
  value,
  description,
  required,
  placeholder,
  onChange,
}) => {
  const inputClass = classNames(
    'a-input',
    { 'is-required': !!required }
  );
  return (
    <div class={inputClass}>
      <div class="a-input__checkbox">
        <input type="checkbox" id={id} />
        <label htmlFor={id}>{label}</label>
      </div>
    </div>
  )
}

export default Checkbox;