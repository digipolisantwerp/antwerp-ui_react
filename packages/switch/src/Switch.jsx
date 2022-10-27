import React, {Component} from 'react';
import classNames from 'classnames';
import InputLabel from '../../form/src/InputLabel';

interface IProps {
  id?: string;
  label?: string;
  labelTrue: string;
  labelFalse: string;
  onClick?: (event) => void;
  onChecked?: (checked) => void;
  disabled?: boolean;
  ariaLabel?: string;
  qa?: string;
  checked?: boolean;
}

class Switch extends Component<IProps> {
  state = {
    checked: this.props.checked || false
  };

  componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IProps>) {
    // If we change the checked property, change our state
    if(prevProps.checked !== this.props.checked) {
      this.setState({
        checked: this.props.checked || false
      });
    }
  }

  onClick(e) {
    this.setState({checked: !this.state.checked});

    if (this.props.onClick && (typeof this.props.onClick === 'function')) {
      this.props.onClick(e);
    }

    if (this.props.onChecked && (typeof this.props.onChecked === 'function')) {
      this.props.onChecked(!this.state.checked);
    }
  }

  render() {
    const {
      id,
      label,
      labelTrue,
      labelFalse,
      disabled,
      ariaLabel,
      qa,
    } = this.props;

    return (
      <div className="a-input" data-qa={qa}>
        {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
        <div className="a-switch">
          <button
            id={id}
            className="a-switch__button"
            role="switch"
            aria-checked={this.state.checked}
            aria-label={label || ariaLabel}
            disabled={disabled}
            onClick={(event) => this.onClick(event)}>
            <span className="a-switch__off">{labelFalse}</span>
            <span className="a-switch__on">{labelTrue}</span>
          </button>
        </div>
      </div>
    )

  }
}

export default Switch;
