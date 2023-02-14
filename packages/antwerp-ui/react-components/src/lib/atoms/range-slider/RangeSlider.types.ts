export interface RangeSliderProps {
  label?: string;
  start?: number;
  end?: number;
  min?: number;
  max?: number;
  step?: number;
  minRange?: number | false;
  unit?: string;
  range?: boolean;
  labelStart?: string;
  labelEnd?: string;
  iconStart?: string;
  iconEnd?: string;
  ariaLabelMax?: string;
  ariaLabelMin?: string;
  tickMarks?: boolean;
  qa?: string;
  onChange?: (start: number, end?: number) => void;
}

export interface RangeSliderBarProps {
  start: number;
  end?: number;
  min: number;
  range: boolean;
  getPositionFromValue: (value: number) => number;
}

export interface RangeSliderHandleProps {
  value: number;
  min: number;
  max: number;
  step: number;
  direction?: number;
  sliderPos?: number;
  range?: boolean;
  onUpdate: (value: number) => void;
  getPositionFromValue: (value: number) => number;
  ariaLabel?: string;
}
