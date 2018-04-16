import React from 'react';
import classNames from 'classnames';
import Label from '../Label';

const Checkbox = ({
  id,
  label,
  description,
  required,
  placeholder,
  value,
  onChange,
}) => {
  const inputClass = classNames(
    'a-input',
    { 'is-required': !!required }
  );
  return (
    <div className={inputClass}>
      <div className="a-input__checkbox">
        <input type="checkbox" id={id} value={value} />
        <Label htmlFor={id}>{label}</Label>
      </div>
    </div>
  )
}

export default Checkbox;