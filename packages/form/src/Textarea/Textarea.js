import React from 'react';
import classNames from 'classnames';
import InputLabel from '../InputLabel';

const stateClasses = {
  success: 'has-success',
  warning: 'has-warning',
  error: 'has-error',
};

type InputStates = "success" | "warning" | "error";
type InputTypes = "small" | "normal" | "large";

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
  onInvalidCapture?: (e: object) => void,
  state?: InputStates,
  type?: InputTypes,
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
    type,
    onInvalidCapture
  } = props;

  const textareaClass = classNames(
    'a-input',
    {
      'is-required': !!required,
      [`${stateClasses[state]}`]: !!state,
      [`a-input--${type}`]: !!type,
    },
    className,
  );

  return (
    <div className={textareaClass} style={style} data-qa={qa}>
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
      <textarea id={id} placeholder={placeholder} name={name} value={value} onChange={onChange} onBlur={onBlur} disabled={disabled} required={required} onInvalidCapture={onInvalidCapture}></textarea>
    </div>
  )
}

export default Textarea;
