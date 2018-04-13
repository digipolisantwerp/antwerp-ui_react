import React from 'react';
import classNames from 'classnames';
import Label from '../Label';

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
    <div className={inputClass}>
      <div className="a-input__checkbox">
        <input type="checkbox" id={id} />
        <Label htmlFor={id}>{label}</Label>
      </div>
    </div>
  )
}

export default Checkbox;