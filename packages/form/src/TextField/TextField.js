import React from 'react';
import classNames from 'classnames';
import Label from '../Label';

type Props = {
  id?: string,
  label?: string,
  value?: string,
  name?: string,
  description?: string,
  required?: boolean,
  placeholder?: string,
  onChange?: (e: object) => void,
  onClick?: (e: object) => void,
  onBlur?: (e: object) => void,
};

const TextField = (props: Props) => {
  const {
    id,
    label,
    value,
    name,
    description,
    required,
    placeholder,
    onChange,
    onClick,
    onBlur,
  } = props;

  const inputClass = classNames(
    'a-input',
    { 'is-required': !!required }
  );
  return (
    <div className={inputClass}>
      <Label htmlFor={id}>{label}</Label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onClick={onClick}
        onBlur={onBlur} />
      <small>{description}</small>
    </div>
  )
}

export default TextField;