import React from 'react';
import classNames from 'classnames';

const Label = ({
  style,
  htmlFor,
  children,
  inline,
}) => {
  const labelClass = classNames(
    'a-input__label',
    {
      'a-input__label--inline': !!inline,
    }
  );
  return (
    <label className={labelClass} htmlFor={htmlFor} style={style}>
      {children}
    </label>
  )
}

export default Label;