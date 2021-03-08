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
type Sizes = "small" | "normal" | "large";

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
  iconright?: React.ReactElement | string,
  iconleft?: React.ReactElement | string,
  addonleft?: string,
  addonright?: string,
  loading?: boolean,
  type?: string,
  size?: Sizes,
  /** Qa id */
  qa?: string,
  inputRef?: (ref: React.Ref) => void,
  errorDescription?: string,
  className?: string,
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
      loading,
      qa,
      type = 'text',
      size,
      errorDescription,
      className,
      addonleft,
      addonright,
      ...extraProps
    } = this.props;

    const inputClass = classNames(
      'a-input',
      {
        'has-icon-right': iconright || loading,
        'has-icon-left': iconleft,
        'has-addon': !!addonleft || !!addonright,
        'is-required': !!required,
        [`${stateClasses[state]}`]: !!state,
        [`a-input--${size}`]: !!size,
      },
        className
    );

    return (
      <div className={inputClass} data-qa={qa}>
        {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
        <div className="a-input__wrapper">
          {addonleft ? <div className="a-input__addon">{addonleft}</div> : null}
          {iconleft ? <Icon name={iconleft}/> : null}
          {mask ? <InputMask {...this.props} /> :
            <input id={id} type={type} autoComplete={autoComplete} disabled={disabled}
                   ref={ref => this.props.inputRef && this.props.inputRef(ref)} {...extraProps} />}
          {iconright ? <Icon name={iconright}/> : null}
          {loading ? <span className="fa a-spinner a-spinner--sm"/> : null}
          {addonright ? <div className="a-input__addon">{addonright}</div> : null}
        </div>
        {description ? <small>{description}</small> : null}
        {errorDescription && <small className="u-text-danger">{errorDescription}</small>}
      </div>
    )
  }
}

export default TextField;
