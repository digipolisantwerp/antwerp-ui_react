import React, { Component } from 'react';
import { omit } from 'lodash-es';
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
  autoComplete?: string,
  iconright?: string,
  iconleft?: string,
  loading?: boolean,
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
      autoComplete,
      disabled,
      iconright,
      iconleft,
      loading
    } = this.props;

    const inputClass = classNames(
      'a-input',
      {
        'has-icon-right': iconright || loading,
        'has-icon-left': iconleft,
        'is-required': !!required,
        [`${stateClasses[state]}`]: !!state,
      }
    );

    return (
      <div className={inputClass}>
        {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
        <div className="a-input__wrapper">
          {iconleft ? <Icon name={iconleft} /> : null}
          {mask ?  <InputMask {...this.props} /> : <input type="text" autoComplete={autoComplete} disabled={disabled} {...omit(this.props, ['loading'])} />}
          {iconright ? <Icon name={iconright} /> : null}
          {loading ? <span className="fa a-spinner a-spinner--sm" /> : null}
        </div>

        <small>{description}</small>
      </div>
    )
  }
}

export default TextField;
