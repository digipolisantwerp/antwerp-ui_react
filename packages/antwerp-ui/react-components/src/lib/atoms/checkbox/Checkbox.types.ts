import { ChangeEvent } from 'react';

export interface CheckboxProps {
  name: string;
  label?: string;
  id: string;
  qa?: string;
  indeterminate?: boolean;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
