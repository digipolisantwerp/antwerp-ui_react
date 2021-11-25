import React, { Component } from 'react';
import classNames from 'classnames';
import Option from './Option';
import InputLabel from '../InputLabel';
import Icon from '../../../icon/src/Icon';
import Spinner from '../../../spinner/src/Spinner';

type InputStates = "success" | "warning" | "error";
type Sizes = "small" | "normal" | "large";

export const stateClasses = {
  success: 'has-success',
  warning: 'has-warning',
  error: 'has-error',
};

type SelectOption = {
  label: string,
  value: string,
  disabled?: boolean,
};

type Props = {
  id?: string,
  label?: string,
  name?: string,
  inline?: boolean,
  state?: InputStates,
  className?: string,
  style?: object,
  required?: boolean,
  loading?: boolean,
  placeholder?: string,
  options?: Array<SelectOption>,
  onChange?: (e: object) => void,
  value?: string,
  disabled?: boolean,
  size?: Sizes,
  ariaLabelledby?: string,
  /** Qa id */
  qa?: string,
};

class Select extends Component<Props> {
  static defaultProps = {
    value: ''
  };

  render() {
    const {
      id,
      label,
      name,
      inline,
      className,
      state,
      style,
      required,
      disabled,
      placeholder,
      options,
      onChange,
      value,
      loading,
      size,
      ariaLabelledby,
      qa,
    } = this.props;

    const selectClass = classNames(
      'a-input',
      'has-icon-right',
      {
        'a-input--inline': !!inline,
        [`${stateClasses[state]}`]: !!state,
        'is-required': !!required,
        [`a-input--${size}`]: !!size,
      },
      className
    );

    const wrapperClass = classNames(
      'a-input__wrapper',
      {
        'a-input__wrapper--inline': !!inline
      }
    );

    return (
      <div className={selectClass} name={name} data-qa={qa}>
        {label && <InputLabel inline={inline} htmlFor={id}>{label}</InputLabel>}
        <div className={wrapperClass}>
          <select id={id} name={name} onChange={onChange} value={value} disabled={disabled} aria-labelledby={ariaLabelledby}>
            {placeholder && <option value="" disabled>{placeholder}</option>}
            {options.map(option => (
              <Option
                value={option.value}
                key={option.value}
                id={option.value}
                name={name}
                disabled={option.disabled}>
                {option.label}
              </Option>
            ))}
          </select>
          {loading ? <Spinner size="small" className="ai" /> : <Icon name="ai-arrow-down-1" />}
        </div>
      </div>
    )
  }
}

export default Select;
