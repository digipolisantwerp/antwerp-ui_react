import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import InputLabel from '../InputLabel';
import TextField from '../TextField';
import { default as Select } from '../Select';
import countryCodes from './TelephoneNumber.const';

import './TelephoneNumber.scss';

const stateClasses = {
  success: 'has-success',
  warning: 'has-warning',
  error: 'has-error',
};

type InputStates = "success" | "warning" | "error";
type InputSizes = "small" | "normal" | "large";

type Props = {
  id: string,
  label?: string,
  value?: {
    number: String,
    areaCode: String,
  },
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
  size?: InputSizes;
  /** Qa id */
  qa?: string,
  inputRef?: (ref: React.Ref) => void;
  errorDescription?: string;
  className?: String;
};

const TelephoneNumber = (props: Props) => {
  const {
    id,
    label,
    value,
    name,
    placeholder,
    qa,
    className,
    style,
    required,
    state,
    loading,
    onChange,
    defaultAreaCode = '+32',
    description,
    errorDescription,
    ...extraProps
  } = props;

  const [internalValue, setInternalValue] = useState({
    areaCode: internalValue && internalValue.areaCode ? internalValue.areaCode : '+32',
    number: internalValue && internalValue.number ? internalValue.number : ''
  });

  useEffect(() => onChange(internalValue), [internalValue])
  useEffect(() => {
    if(
      typeof value === 'object' && value !== null &&
      (
        value.areaCode !== internalValue.areaCode ||
        value.number !== internalValue.number
      )
    ) {
      setInternalValue(value);
    }
  }, [value])

  const updateNumber = (e) => {
    setInternalValue({
      ...internalValue,
      number: e.target.value
    });
  }

  const updateAreaCode = (e) => {
    setInternalValue({
      ...internalValue,
      areaCode: e.target.value
    });
  }

  const options = countryCodes;

  const telephoneNumberClass = classNames(
    'a-input',
    'a-input-telephone',
    {
      'is-required': !!required,
      [`${stateClasses[state]}`]: !!state,
    },
    className,
  );

  return (
    <div className={telephoneNumberClass} style={style} data-qa={qa}>
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
      <div className="a-input__wrapper">
        <Select
          className="a-input-telephone__area-code"
          id={`${id}-areacode`}
          name={`${name}-areacode`}
          required={required}
          onChange={updateAreaCode}
          value={internalValue.areaCode}
          options={options}
          {...extraProps}
        />
        <TextField
          className="a-input-telephone__number"
          id={id}
          placeholder={placeholder}
          name={name}
          required={required}
          loading={loading}
          onChange={updateNumber}
          value={internalValue.number}
          {...extraProps}
        />
      </div>
      {description ? <small>{description}</small> : null}
      {errorDescription && <small className="u-text-danger">{errorDescription}</small>}
    </div>
  )
}

export default TelephoneNumber;
