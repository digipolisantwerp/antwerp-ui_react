import React from 'react';
import classNames from 'classnames';

const RadioGroup = ({
  id,
  name,
  label,
  value,
  className,
  style,
  required,
  children,
  onChange,
}) => {
  const radioGroupClass = classNames(
    'a-input',
  );
  return (
    <div class={radioGroupClass} style={style} onChange={onChange}>
      <label class="a-input__label" htmlFor={id}>{label}</label>
      {children}
    </div>
  )
}

export default RadioGroup;
