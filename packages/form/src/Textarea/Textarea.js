import React from 'react';
import classNames from 'classnames';
import Label from '../Label';

type Props = {
  id?: string,
  label?: string,
  value?: string,
  name?: string,
  placeholder?: string,
  className?: string,
  style?: object,
  required?: boolean,
  onChange?: (e: object) => void,
};

const Textarea = (props: Props) => {
  const {
    id,
    label,
    value,
    name,
    placeholder,
    className,
    style,
    required,
    onChange,
  } = props;

  const textareaClass = classNames(
    'a-input',
    { 'is-required': !!required },
    className,
  );

  const labelComponent = label ? (
    <Label htmlFor={id}>{label}</Label>
  ) : null;

  return (
    <div className={textareaClass} style={style}>
      {labelComponent}
      <textarea id={id} placeholder={placeholder} name={name} value={value} onChange={onChange}></textarea>
    </div>
  )
}

export default Textarea;