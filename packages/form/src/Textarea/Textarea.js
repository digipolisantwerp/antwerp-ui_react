import React from 'react';
import classNames from 'classnames';
import InputLabel from '../InputLabel';

const stateClasses = {
  success: 'has-success',
  warning: 'has-warning',
  error: 'has-error',
};

type InputStates = "success" | "warning" | "error";

type Props = {
  id?: string,
  label?: string,
  value?: string,
  name?: string,
  disabled?: boolean,
  placeholder?: string,
  className?: string,
  style?: object,
  required?: boolean,
  onChange?: (e: object) => void,
  onBlur?: (e: object) => void,
  state?: InputStates,
  /** Qa id */
  qa?: string,
};

const Textarea = (props: Props) => {
  const {
    id,
    label,
    value,
    name,
    disabled,
    placeholder,
    className,
    style,
    required,
    onChange,
    onBlur,
    state,
    qa,
  } = props;

  const textareaClass = classNames(
    'a-input',
    {
      'is-required': !!required,
      [`${stateClasses[state]}`]: !!state,
    },
    className,
  );

  return (
    <div className={textareaClass} style={style} data-qa={qa}>
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
      <textarea id={id} placeholder={placeholder} name={name} value={value} onChange={onChange} onBlur={onBlur} disabled={disabled}></textarea>
    </div>
  )
}

export default Textarea;
