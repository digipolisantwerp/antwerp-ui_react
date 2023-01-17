import { Moment } from 'moment';
import { FocusEvent, KeyboardEventHandler, MouseEventHandler } from 'react';
import { TextFieldProps } from '../../atoms/input';

export interface DatepickerInputProps {
  qa?: string;
  format?: string;
  mask?: string;
  inputProps?: Pick<
    TextFieldProps,
    'id' | 'label' | 'description' | 'disabled' | 'name' | 'placeholder' | 'required' | 'size'
  >;
  value?: string;
  onChange?: (value: string, isValid: boolean) => void;
}

export interface DatepickerInputIconProps {
  onClick: MouseEventHandler<HTMLSpanElement>;
  onEnter: KeyboardEventHandler<HTMLSpanElement>;
}

export interface DatepickerProps {
  qa?: string;
  className?: string;
  ariaLabel?: string;
  ariaLabelPreviousMonth?: string;
  ariaLabelPreviousYear?: string;
  ariaLabelPreviousYears?: string;
  ariaLabelNextMonth?: string;
  ariaLabelNextYear?: string;
  ariaLabelNextYears?: string;
  unavailableFrom?: string;
  unavailableTo?: string;
  unavailable?: string[];
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: (e: FocusEvent) => void;
  isOpen: boolean;
}

export interface DaysGridProps {
  value?: Moment;
  onChange: (value: Moment) => void;
  activeMonth: number;
  activeYear: number;
  unavailableFrom?: string;
  unavailableTo?: string;
  unavailable?: string[];
}

export interface DaysGridDayProps {
  value?: Moment;
  date: Moment;
  activeMonth: Moment;
  unavailableFrom?: string;
  unavailableTo?: string;
  unavailable?: string[];
  onChange: (value: Moment) => void;
}

export interface MonthsGridProps {
  value?: Moment;
  onChange: (value: Moment) => void;
  activeYear: number;
}

export interface YearsGridProps {
  value?: Moment;
  onChange: (value: Moment) => void;
  yearsRowsStart: number;
  activeMonth: number;
}

export type ActiveView = 'days' | 'months' | 'years';
