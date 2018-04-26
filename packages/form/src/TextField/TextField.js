import React, { Component } from 'react';
import classNames from 'classnames';
import InputLabel from '../InputLabel';
import InputMask from 'react-input-mask';

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
  description?: string,
  required?: boolean,
  placeholder?: string,
  onChange?: (e: object) => void,
  onBlur?: (e: object) => void,
  mask?: string,
  state?: InputStates,
};

class TextField extends Component<Props> {
  render() {
    const {
      id,
      label,
      value,
      name,
      description,
      required,
      placeholder,
      onChange,
      onBlur,
      mask,
      state,
    } = this.props;

    const inputClass = classNames(
      'a-input',
      {
        'is-required': !!required,
        [`${stateClasses[state]}`]: !!state,
      }
    );

    return (
      <div className={inputClass}>
        {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
        <div className="a-input__wrapper">
          {mask ?  <InputMask {...this.props} /> : <input type="text" {...this.props} />}
          <small>{description}</small>
        </div>
      </div>
    )
  }
}

export default TextField;
