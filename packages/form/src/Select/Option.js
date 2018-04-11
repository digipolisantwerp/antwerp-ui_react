import React from 'react';

const Option = ({
  value,
  disabled,
  children,
}) => {
  return (
    <option value={value} disabled={disabled}>
      {children}
    </option>
  )
}

export default Option;