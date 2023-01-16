export interface DatepickerInputProps {
  qa?: string;
}

export interface DatepickerProps {
  qa?: string;
  ariaLabel?: string;
  unavailableFrom?: string;
  unavailableTo?: string;
  unavailable?: string[];
  isOpen: boolean;
}

export interface DaysGridProps {
  activeMonth: number;
  activeYear: number;
  unavailableFrom?: string;
  unavailableTo?: string;
  unavailable?: string[];
}

export interface MonthsGridProps {
  activeMonth: number;
}

export interface YearsGridProps {
  yearsRowsStart: number;
  activeYear: number;
}

export type ActiveView = 'days' | 'months' | 'years';
