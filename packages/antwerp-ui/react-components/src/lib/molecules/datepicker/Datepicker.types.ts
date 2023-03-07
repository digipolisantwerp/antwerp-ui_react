import { FocusEvent, KeyboardEventHandler, MouseEventHandler } from 'react';
// import { TextFieldProps } from '../../atoms/input';
// export interface DatepickerInputProps {
//   qa?: string;
//   format?: string;
//   mask?: string;
//   inputProps?: Pick<
//     TextFieldProps,
//     'id' | 'label' | 'description' | 'disabled' | 'name' | 'placeholder' | 'required' | 'size'
//   >;
//   value?: string;
//   onChange?: (value: string, isValid: boolean) => void;
// }
// export interface DatepickerInputIconProps {
//   onClick: MouseEventHandler<HTMLSpanElement>;
//   onEnter: KeyboardEventHandler<HTMLSpanElement>;
// }

export interface CalendarProps {
  ariaLabel?: string;
  ariaLabelCurrentDay?: string;
  ariaLabelNextMonth?: string;
  ariaLabelNextYear?: string;
  ariaLabelNextYears?: string;
  ariaLabelPreviousMonth?: string;
  ariaLabelPreviousYear?: string;
  ariaLabelPreviousYears?: string;
  className?: string;
  isOpen?: boolean;
  onBlur?: (e: FocusEvent) => void;
  onChange?: (value: string) => void;
  qa?: string;
  unavailable?: string[];
  unavailableFrom?: string;
  unavailableTo?: string;
  value?: string;
}

export interface MonthsViewProps {
  value?: Date;
  onChange: (value: Date) => void;
  activeYear: number;
}

export interface YearsViewProps {
  value?: Date;
  onChange: (value: Date) => void;
  activeMonth: number;
  yearsRowsStart: number;
}

export type DaysViewProps = Pick<
  CalendarProps,
  'ariaLabelCurrentDay' | 'unavailableFrom' | 'unavailableTo' | 'unavailable'
> & {
  value?: Date;
  onChange: (value: Date) => void;
  activeMonth: number;
  activeYear: number;
};

export type DayButtonProps = Pick<
  DaysViewProps,
  'ariaLabelCurrentDay' | 'unavailableFrom' | 'unavailableTo' | 'unavailable' | 'onChange' | 'value'
> & {
  date: Date;
  monthYear: Date;
};

export enum CalendarView {
  DAYS = 'd',
  MONTHS = 'm',
  YEARS = 'y'
}
