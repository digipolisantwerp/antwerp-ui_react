import React, {Component} from 'react';
import classNames from 'classnames';
import InputLabel from '../../form/src/InputLabel';

interface IProps {
  id: string;
  label: string;
  name: string;
  labelTrue?: string;
  labelFalse?: string;
  onClick?: (event) => void;
  required?: boolean;
  disabled?: boolean;
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
  }

  render() {
    const {
      id,
      label,
      name,
      labelTrue,
      labelFalse,
      required,
      disabled,
      qa,
    } = this.props;

    const containerClass = classNames(
      'a-input',
      {'is-required': !!required}
    );

    const switchWrapperClass = classNames(
      'a-switch',
      {'disabled': disabled}
    );

    return (
      <div className={containerClass} data-qa={qa}>
        {label && <InputLabel>{label}</InputLabel>}
        <div className={switchWrapperClass}>
          {labelFalse &&
          <label className="a-switch__label">{labelFalse}</label>
          }
          <div className="a-switch__toggle">
            <input
              type="checkbox"
              name={name}
              id={id}
              role="switch"
              aria-checked={this.state.checked}
              defaultChecked={this.state.checked}
              disabled={disabled}
              onChange={(event) => this.onClick(event)}
            />
            <label htmlFor={id}><span className="u-screen-reader-only">Toggle "{label}"</span></label>
          </div>
          {labelTrue &&
          <label className="a-switch__label">{labelTrue}</label>
          }
        </div>
      </div>
    )
  }
}

export default Switch;
