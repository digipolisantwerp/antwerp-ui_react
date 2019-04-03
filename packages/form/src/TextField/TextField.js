import React, { Component } from 'react';
import classNames from 'classnames';
import InputLabel from '../InputLabel';
import Icon from '../../../icon';
import Spinner from '../../../spinner';
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
  onClick?: (e: object) => void,
  onBlur?: (e: object) => void,
  onKeyDown?: (e: object) => void,
  mask?: string,
  state?: InputStates,
  autocomplete?: string,
  iconRight?: string,
  iconLeft?: string,
  spinner?: boolean,
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
      onClick,
      onBlur,
      onKeyDown,
      mask,
      state,
      autocomplete,
      disabled,
      iconRight,
      iconLeft,
      spinner
    } = this.props;

    const inputClass = classNames(
      'a-input',
      {
        'has-icon-right': iconRight || spinner,
        'has-icon-left': iconLeft,
        'is-required': !!required,
        [`${stateClasses[state]}`]: !!state,
      }
    );

    return (
      <div className={inputClass}>
        {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
        <div className="a-input__wrapper">
          {iconLeft ? <Icon name={iconLeft} /> : null}
          {mask ?  <InputMask {...this.props} /> : <input type="text" autocomplete={autocomplete} disabled={disabled} {...this.props} />}
          {iconRight ? <Icon name={iconRight} /> : null}
          {spinner ? <span className="fa a-spinner a-spinner--sm" /> : null}
        </div>

        <small>{description}</small>
      </div>
    )
  }
}

export default TextField;
