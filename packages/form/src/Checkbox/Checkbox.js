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
  state = {
    checked: this.props.checked || false
  }

  componentDidUpdate(prevProps) {
    if (this.props.checked !== prevProps.checked) {
      this.setState({checked: this.props.checked});
    }
  }

  handleChange = (e) => {
    e.target.value = this.state.checked;
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  render() {
    const {
      id,
      label,
      name,
      required,
      disabled = false,
    } = this.props;

     const {
       checked
     } = this.state;

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
