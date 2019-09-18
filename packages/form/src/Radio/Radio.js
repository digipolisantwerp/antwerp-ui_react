import React from 'react';
import classNames from 'classnames';

type Props = {
  id?: string,
  name?: string,
  value?: string,
  checked?: boolean,
  children?: any,
  disabled?: boolean,
};

const Radio = (props: Props) => {
  const {
    id,
    name,
    value,
    checked,
    children,
    disabled,
    required,
  } = props;
  const radioClass = classNames(
    'a-input__radio'
  );
  return (
    <div className={radioClass}>
      <input type="radio" value={value} id={id} name={name} defaultChecked={checked} checked={checked} disabled={disabled} required={required} />
      <label htmlFor={id}>{children}</label>
    </div>
  )
}

export default Radio;
