import React, { Component } from 'react';
import classNames from 'classnames';
import Option from './Option';
import Label from '../Label';
import Icon from '../../../icon';

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
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
      options,
      onChange,
    } = this.props;
    const selectClass = classNames(
      'a-input',
      'has-icon-right',
      {
        'a-input--inline': !!inline,
        'is-required': !!required,
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
      <div class={selectClass} name={name}>
        <Label inline={inline} htmlFor={id}>{label}</Label>
        <div class={wrapperClass}>
          <select id={id} name={name} onChange={(e) => this.onChange(e)}>
            {options.map(option => (
              <Option
                value={option.value}
                key={option.value}
                id={option.value}
                name={name}
                disabled={option.disabled}
                checked={option.checked}>
                {option.label}
              </Option>
            ))}
          </select>
          <Icon name="angle-down" span />
        </div>
      </div>
    )
  }
}

export default Select;