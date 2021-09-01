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
  /** Qa id */
  qa?: string,
  handler?: () => void
};

class Checkbox extends Component<Props> {
  handleChange = (e) => {
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  defaultId = 'aui-cb-' + Math.random().toString(36);

  render() {
    const {
      id,
      label,
      name,
      required,
      disabled = false,
      qa,
    } = this.props;

    const inputClass = classNames(
      'a-input',
    );

    const requiredLabel = !!required ? <span className="u-text-danger"> *</span> : null;

    return (
      <div className={inputClass} data-qa={qa}>
        <div className="a-input__checkbox">
          <input
            type="checkbox"
            id={id || this.defaultId}
            name={name}
            onChange={this.handleChange}
            aria-checked={this.props.checked}
            checked={this.props.checked}
            disabled={disabled}
            {...this.props.handler}
            />
          <InputLabel htmlFor={id || this.defaultId}>{label}{requiredLabel}</InputLabel>
        </div>
      </div>
    )
  }
}

export default Checkbox;
