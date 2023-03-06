export interface ProgressBarProps {
  percentage: number;
  label: string;
  ariaValueNow?: number;
  minValue?: number;
  maxValue?: number;
  large?: boolean;
  ariaLabel?: string;
  qa?: string;
}
