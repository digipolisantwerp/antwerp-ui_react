import React from 'react';
import classNames from 'classnames';

const Textarea = ({
  id,
  label,
  placeholder,
  className,
  style,
  required,
}) => {

  const textareaClass = classNames(
    'a-input',
    { 'is-required': !!required },
    className,
  );

  const labelComponent = label ? (
    <label class="a-input__label" htmlFor={id}>{label}</label>
  ) : null;

  return (
    <div class={textareaClass} style={style}>
      {labelComponent}
      <textarea id={id} placeholder={placeholder}></textarea>
    </div>
  )
}

export default Textarea;