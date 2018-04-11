import React from 'react';
import classNames from 'classnames';

const Select = ({
  id,
  label,
  name,
  inline,
  className,
  style,
  required,
  children,
}) => {
  const selectClass = classNames(
    'a-input',
    'has-icon-right',
    { 'a-input--inline': !!inline },
    { 'is-required': !!required },
    className
  );
  const labelClass = classNames(
    'a-input__label',
    {
      'a-input__label--inline': !!inline
    }
  );
  const wrapperClass = classNames(
    'a-input__wrapper',
    {
      'a-input__wrapper--inline': !!inline
    }
  );
  return (
    <div class={selectClass} name={name}>
      <label class={labelClass} htmlFor={id}>
        {label}
      </label>
      <div class={wrapperClass}>
        <select id={id}>
          {children}
        </select>
        <span class="fa fa-angle-down"></span>
      </div>
    </div>
  )
}

export default Select;