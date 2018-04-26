import React from 'react';
import classNames from 'classnames';
import InputLabel from '../InputLabel';

type Props = {
  id?: string,
  label?: string,
  value?: string,
  name?: string,
  placeholder?: string,
  className?: string,
  style?: object,
  required?: boolean,
  onChange?: (e: object) => void,
  onBlur?: (e: object) => void,
};

const Textarea = (props: Props) => {
  const {
    id,
    label,
    value,
    name,
    placeholder,
    className,
    style,
    required,
    onChange,
    onBlur,
  } = props;

  const textareaClass = classNames(
    'a-input',
    { 'is-required': !!required },
    className,
  );

  return (
    <div className={textareaClass} style={style}>
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
      <textarea id={id} placeholder={placeholder} name={name} value={value} onChange={onChange} onBlur={onBlur}></textarea>
    </div>
  )
}

export default Textarea;