import { Moment } from 'moment';

export interface DatepickerInputProps {
  qa?: string;
}

export interface DatepickerProps {
  qa?: string;
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
