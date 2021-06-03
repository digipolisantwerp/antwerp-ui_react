import React from 'react';

type Props = {
  children: any,
  value: string,
  disabled?: boolean,
};

const Option = (props: Props) => {
  const {
    value,
    disabled,
    children,
  } = props;
  return (
    <option value={value} disabled={disabled}>
      {children}
    </option>
  )
};

export default Option;
