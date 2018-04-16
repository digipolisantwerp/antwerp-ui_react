import React from 'react';
import classNames from 'classnames';
import Label from '../Label';

type Props = {
  id?: string,
  label: string,
  value?: string,
  description?: string,
  required?: boolean,
  placeholder?: string,
  onChange?: (e: Object) => void,
};

const Checkbox = (props: Props) => {
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
      <div className="a-input__checkbox">
        <input type="checkbox" id={id} value={value} />
        <Label htmlFor={id}>{label}</Label>
      </div>
    </div>
  )
}

export default Checkbox;