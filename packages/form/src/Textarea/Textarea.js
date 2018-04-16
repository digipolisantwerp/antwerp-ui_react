import React from 'react';
import classNames from 'classnames';
import Label from '../Label';

const Textarea = ({
  id,
  label,
  placeholder,
  className,
  style,
  value,
  required,
}) => {

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
      <textarea id={id} placeholder={placeholder} value={value}></textarea>
    </div>
  )
}

export default Textarea;