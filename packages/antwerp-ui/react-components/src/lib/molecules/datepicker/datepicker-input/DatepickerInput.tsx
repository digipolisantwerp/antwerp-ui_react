import moment from 'moment';
import { useOutsideClick } from '../../../../hooks/useOutsideClick.hook';
import React, { FocusEvent, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { TextField } from '../../../atoms/input';
import { renderLabel } from '../../../atoms/input/input.renders';
import { DatepickerInputProps } from '../datepicker.types';
import Datepicker from '../datepicker/Datepicker';
import DatepickerInputIcon from './DatepickerInputIcon';

export function DatepickerInput({
  qa,
  value,
  onChange,
  format,
  mask,
  label,
  description,
  inputProps
}: DatepickerInputProps) {
  const idRef = useRef(uuid()).current;
  const datepickerIconRef = useRef<HTMLSpanElement>(null);
  const [currentValue, setCurrentValue] = useState(value || '');
  const [dateInvalidError, setDateInvalidError] = useState('');
  const [currentMomentValue, setCurrentMomentValue] = useState(value ? moment(value, format, true) : undefined);
  const [isOpen, setIsOpen] = useState(false);

  const handleOutsideClick = (element: Node) => {
    if (!datepickerIconRef.current?.contains(element)) {
      setIsOpen(false);
    }
  };
  const { elRef: datepickerRef } = useOutsideClick(handleOutsideClick);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleBlur = (e: FocusEvent) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsOpen(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setCurrentValue(newValue);
    const momentValue = moment(newValue, format, true);
    onChange && onChange(newValue, momentValue.isValid());

    if (!!newValue && !newValue.includes('_') && !momentValue.isValid()) {
      setDateInvalidError('Datum is niet geldig');
    } else {
      setDateInvalidError('');
    }
    if (momentValue.isValid()) {
      setCurrentMomentValue(momentValue);
    }
  };

  const handleCalendarDateChange = (value: string) => {
    const newMomentValue = moment(value);
    setCurrentMomentValue(newMomentValue);
    setCurrentValue(newMomentValue.format(format));
    onChange && onChange(newMomentValue.format(format), newMomentValue.isValid());
    setDateInvalidError('');
    setIsOpen(false);
  };

  return (
    <div className="a-input has-icon-right" data-qa={qa}>
      {renderLabel({ label, id: inputProps?.id || idRef, required: inputProps?.required })}
      <div className="a-input__wrapper">
        <TextField
          {...inputProps}
          type="text"
          mask={mask}
          id={inputProps?.id || idRef}
          placeholder={format?.toLowerCase()}
          value={currentValue}
          onChange={handleChange}
          description={dateInvalidError || description}
          state={dateInvalidError ? 'error' : undefined}
        />
        <DatepickerInputIcon ref={datepickerIconRef} onClick={toggleOpen} onEnter={toggleOpen} />
        {isOpen && (
          <Datepicker
            ref={datepickerRef}
            className="m-datepicker--fixed"
            isOpen={isOpen}
            onChange={handleCalendarDateChange}
            onBlur={handleBlur}
            value={currentMomentValue?.toISOString()}
          />
        )}
      </div>
    </div>
  );
}
DatepickerInput.defaultProps = {
  format: 'DD/MM/YYYY',
  mask: '99/99/9999'
};

export default DatepickerInput;
