import React from 'react';
import classNames from 'classnames';
import Label from '../Label';

type Props = {
  id?: string,
  label?: string,
  placeholder?: string,
  className?: string,
  style?: object,
  required?: boolean,
};

const Textarea = (props: Props) => {
  const {
    id,
    label,
    placeholder,
    className,
    style,
    required,
  } = props;

  const textareaClass = classNames(
    'a-input',
    { 'is-required': !!required },
    className,
  );

  const labelComponent = label ? (
    <Label htmlFor={id}>{label}</Label>
  ) : null;

  return (
    <div className={textareaClass} style={style}>
      {labelComponent}
      <textarea id={id} placeholder={placeholder} value={value}></textarea>
    </div>
  )
}

export default Textarea;