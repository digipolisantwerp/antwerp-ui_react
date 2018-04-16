import React from 'react';
import classNames from 'classnames';

type Props = {
  style?: object,
  htmlFor?: string,
  children?: any,
  inline?: boolean,
};

const Label = (props: Props) => {
  const {
    style,
    htmlFor,
    children,
    inline,
  } = props;
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