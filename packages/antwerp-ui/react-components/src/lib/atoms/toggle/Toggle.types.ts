type ToggleButtonThemes = 'primary' | 'success' | 'warning' | 'danger';

export interface ToggleProps {
  checked?: boolean;
  checkedTheme?: ToggleButtonThemes;
  checkedIcon?: string;
  checkedLabel?: string;
  id?: string;
  onClick?: (checked: boolean) => void;
  qa?: string;
  showLabels?: boolean;
  size?: 'small' | 'large';
  uncheckedTheme?: ToggleButtonThemes;
  uncheckedIcon?: string;
  uncheckedLabel?: string;
}
