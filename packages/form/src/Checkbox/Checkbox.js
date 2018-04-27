import React, { Component } from 'react';
import classNames from 'classnames';
import InputLabel from '../InputLabel';

type Props = {
  id?: string,
  label: string,
  name?: string,
  checked?: boolean,
  value?: string,
  description?: string,
  required?: boolean,
  placeholder?: string,
  onChange?: (e: Object) => void,
};

class Checkbox extends Component<Props> {
  state = {
    checked: false
  }

  handleChange = (e) => {
    e.target.value = this.state.checked
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  render() {
    const {
      id,
      label,
      name,
      value,
      checked = false,
      description,
      required,
      placeholder,
      onChange,
    } = this.props;

    const inputClass = classNames(
      'a-input',
      { 'is-required': !!required }
    );

    return (

      <div className={inputClass}>
        <div className="a-input__checkbox">
          <input type="checkbox" id={id} name={name} onChange={this.handleChange} defaultChecked={checked}/>
          <InputLabel htmlFor={id}>{label}</InputLabel>
        </div>
      </div>
    )
  }
}

export default Checkbox;
