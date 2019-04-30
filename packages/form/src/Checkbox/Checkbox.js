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
	disabled?: boolean,
  placeholder?: string,
  onChange?: (e: Object) => void,
};

class Checkbox extends Component<Props> {
  state = {
    checked: false
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.checked !== this.state.checked){
      this.setState({checked: nextProps.checked});
    }
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
      disabled = false,
      placeholder,
      onChange,
    } = this.props;

    const inputClass = classNames(
      'a-input',
    );

    const requiredLabel = !!required ? <span className="u-text-danger"> *</span> : null;

    return (

      <div className={inputClass}>
        <div className="a-input__checkbox">
          <input type="checkbox" id={id} name={name} onChange={this.handleChange} checked={checked} disabled={disabled}/>
          <InputLabel htmlFor={id}>{label}{requiredLabel}</InputLabel>
        </div>
      </div>
    )
  }
}

export default Checkbox;
