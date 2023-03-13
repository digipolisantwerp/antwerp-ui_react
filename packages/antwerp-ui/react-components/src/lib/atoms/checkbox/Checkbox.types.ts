import { ChangeEvent } from 'react';

export interface CheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  id: string;
  indeterminate?: boolean;
  label?: string;
  name: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  qa?: string;
  showLabel?: boolean;
}
