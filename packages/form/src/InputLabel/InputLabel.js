import React from 'react';
import classNames from 'classnames';

type Props = {
  style?: object,
  htmlFor?: string,
  children?: any,
  inline?: boolean,
  /** Qa id */
  qa?: string,
};

const InputLabel = (props: Props) => {
  const {
    style,
    htmlFor,
    children,
    inline,
    qa,
  } = props;
  const labelClass = classNames(
    'a-input__label',
    {
      'a-input__label--inline': !!inline,
    }
  );
  return (
    <label className={labelClass} htmlFor={htmlFor} style={style} data-qa={qa}>
      {children}
    </label>
  )
}

export default InputLabel;
