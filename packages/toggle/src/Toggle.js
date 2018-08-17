import React, { Component } from 'react';
import classNames from 'classnames';

const sizeClasses = {
  tiny: 'a-toggle--tiny',
  small: 'a-toggle--small',
  large: 'a-toggle--large',
};

type Sizes = "tiny" | "small" | "large";

type Props = {
  id?: string,
  name?: string,
  size?: Sizes,
  checked?: boolean,
  value?: string,
  onChange?: (e: Object) => void,
  onClick?: (e: Object) => void,
};

class Toggle extends Component<Props> {
  state = {
    checked: false
  }

  handleChange = (e) => {
    console.log(e.target.value, this.state.checked);
    e.target.value = this.state.checked
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  handleClick = (e) => {
    this.setState({ checked: !this.state.checked });
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    const {
      id,
      name,
      size,
      value,
      checked = false,
      onChange,
      onClick,
    } = this.props;

    const toggleClass = classNames(
      'a-toggle has-icon',
      {
        [`${sizeClasses[size]}`]: !!size,
      }
    );

    return (
      <div className={toggleClass}>
        <input
          className="a-toggle__checkbox"
          id={id}
          name={name}
          type="checkbox"
          onChange={this.handleChange}
          onClick={this.handleClick}
        />
        <div className="a-toggle__labels">
          <label htmlFor="icon-toggle" className="a-toggle__on a-button has-icon">
            <i className="fa fa-bars"></i>
          </label>
          <label htmlFor="icon-toggle" className="a-toggle__off a-button a-button--danger has-icon">
            <i className="fa fa-close"></i>
          </label>
        </div>
      </div>
    );
  }
}

export default Toggle;