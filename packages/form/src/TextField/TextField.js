import React, {Component} from 'react';
import InputMask from 'react-input-mask';
import classNames from 'classnames';
import InputLabel from '../InputLabel';
import Icon from '../../../icon';

export const stateClasses = {
  success: 'has-success',
  warning: 'has-warning',
  error: 'has-error',
};

type InputStates = "success" | "warning" | "error";
type InputTypes = "small" | "normal";

type Props = {
  id?: string,
  label?: string,
  value?: string,
  name?: string,
  description?: string,
  required?: boolean,
  placeholder?: string,
  onChange?: (e: object) => void,
  onClick?: (e: object) => void,
  onBlur?: (e: object) => void,
  onFocus?: (e: object) => void,
  onKeyDown?: (e: object) => void,
  mask?: string,
  state?: InputStates,
  autoComplete?: string,
  iconright?: string,
  iconleft?: string,
  loading?: boolean,
  type?: InputTypes;
  /** Qa id */
  qa?: string,
  inputRef?: (ref: React.Ref) => void;
};

class TextField extends Component<Props> {
  render() {
    const {
      id,
      label,
      description,
      required,
      mask,
      state,
      autoComplete,
      disabled,
      iconright,
      iconleft,
      qa,
      type,
    } = this.props;

    const {loading, ...extraProps} = this.props;

    const inputClass = classNames(
      'a-input',
      {
        'has-icon-right': iconright || loading,
        'has-icon-left': iconleft,
        'is-required': !!required,
        [`${stateClasses[state]}`]: !!state,
        'a-input--small': type === "small"
      }
    );

    return (
      <div className={inputClass} data-qa={qa}>
        {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
        <div className="a-input__wrapper">
          {iconleft ? <Icon name={iconleft}/> : null}
          {mask ? <InputMask {...this.props} /> :
            <input id={id} type="text" autoComplete={autoComplete} disabled={disabled}
                   ref={ref => this.props.inputRef && this.props.inputRef(ref)} {...extraProps} />}
          {iconright ? <Icon name={iconright}/> : null}
          {loading ? <span className="fa a-spinner a-spinner--sm"/> : null}
        </div>
        {description ? <small>{description}</small> : null}
      </div>
    )
  }
}

export default TextField;
