import moment from 'moment';
import { useOutsideClick } from 'packages/antwerp-ui/react-components/src/hooks/useOutsideClick.hook';
import React, { FocusEvent, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { TextField } from '../../../atoms/input';
import { renderLabel } from '../../../atoms/input/input.renders';
import { DatepickerInputProps } from '../datepicker.types';
import Datepicker from '../datepicker/Datepicker';
import DatepickerInputIcon from './DatepickerInputIcon';

export function DatepickerInput({ qa, value, onChange, format, label, id, required }: DatepickerInputProps) {
  const idRef = useRef(uuid()).current;
  const datepickerIconRef = useRef<HTMLSpanElement>(null);
  const [currentValue, setCurrentValue] = useState(value || '');
  const [currentMomentValue, setCurrentMomentValue] = useState(value ? moment(value) : undefined);
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
    setCurrentValue(e.target.value);
    onChange && onChange(e.target.value);
  };

  const handleCalendarDateChange = (value: string) => {
    setCurrentMomentValue(moment(value));
    setCurrentValue(moment(value).format(format));
    onChange && onChange(moment(value).format(format));
    setIsOpen(false);
  };

  return (
    <div className="a-input has-icon-right" data-qa={qa}>
      {renderLabel({ label, id: id || idRef, required })}
      <div className="a-input__wrapper">
        <TextField
          type="text"
          name="input-datepicker"
          id={id || idRef}
          placeholder={format}
          value={currentValue}
          onChange={handleChange}
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
  format: 'DD/MM/YYYY'
};

export default DatepickerInput;
