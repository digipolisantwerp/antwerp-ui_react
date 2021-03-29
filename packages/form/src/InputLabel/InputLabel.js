import React from 'react';
import classNames from 'classnames';

type Props = {
  style?: object,
  htmlFor?: string,
  children?: any,
  inline?: boolean,
  id?: string,
  /** Qa id */
  qa?: string,
};

const InputLabel = (props: Props) => {
  const {
    style,
    htmlFor,
    children,
    inline,
    id,
    qa,
  } = props;
  const labelClass = classNames(
    'a-input__label',
    {
      'a-input__label--inline': !!inline,
    }
  );
  return (
    <label className={labelClass} htmlFor={htmlFor} style={style} id={id} data-qa={qa}>
      {children}
    </label>
  )
};

export default InputLabel;
