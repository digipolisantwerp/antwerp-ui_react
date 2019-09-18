import React, { Component } from 'react';
import classNames from 'classnames';
import InputLabel from '../InputLabel';

type Props = {
  id?: string,
  label: string,
  name?: string,
  checked?: boolean,
  required?: boolean,
  disabled?: boolean,
  onChange?: (e: Object) => void,
};

class Checkbox extends Component<Props> {
  handleChange = (e) => {
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  render() {
    const {
      id,
      label,
      name,
      checked = false,
      required,
      disabled = false,
    } = this.props;

    const inputClass = classNames(
      'a-input',
    );

    const requiredLabel = !!required ? <span className="u-text-danger"> *</span> : null;

    return (
      <div className={inputClass}>
        <div className="a-input__checkbox">
          <input type="checkbox" id={id} name={name} onChange={this.handleChange} checked={checked} disabled={disabled}/>
          <InputLabel htmlFor={id}><span dangerouslySetInnerHTML={{ __html: label }}></span>{requiredLabel}</InputLabel>
        </div>
      </div>
    )
  }
}

export default Checkbox;
