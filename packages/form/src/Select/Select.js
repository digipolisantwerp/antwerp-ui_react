import React, { Component } from 'react';
import classNames from 'classnames';
import Option from './Option';
import InputLabel from '../InputLabel';
import Icon from '../../../icon/src/Icon';
import Spinner from '../../../spinner/src/Spinner';

type InputTypes = "small" | "normal" | "large";

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
  className?: string,
  style?: object,
  required?: boolean,
  loading?: boolean,
  placeholder?: string,
  options?: Array<SelectOption>,
  onChange?: (e: object) => void,
  value?: string,
  disabled?: boolean,
  type?: InputTypes,
  /** Qa id */
  qa?: string,
};

class Select extends Component<Props> {
  state = {}

  onChange(e) {
    const value = e.currentTarget.value;
    this.setState({ value });

    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }
  render() {
    const {
      id,
      label,
      name,
      inline,
      className,
      style,
      required,
      disabled,
      placeholder,
      options,
      onChange,
      value,
      loading,
      boolean,
      qa,
      type,
    } = this.props;

    const selectClass = classNames(
      'a-input',
      'has-icon-right',
      {
        'a-input--inline': !!inline,
        'is-required': !!required,
        [`a-input--${type}`]: !!type,
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
          <select id={id} name={name} onChange={(e) => this.onChange(e)} value={value} defaultValue={placeholder} disabled={disabled}>
            {placeholder && <option value={placeholder} disabled>{placeholder}</option>}
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
          {loading ? <Spinner size="small" className="fa" /> : <Icon name="angle-down" span />}
        </div>
      </div>
    )
  }
}

export default Select;
