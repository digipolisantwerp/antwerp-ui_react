import { ReactElement } from 'react';

export interface RadioProps {
  checked?: boolean;
  disabled?: boolean;
  id: string;
  label: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  qa?: string;
  value: string;
}

export interface RadioGroupProps {
  children?: ReactElement[] | ReactElement;
  value?: string;
  label?: string;
  name: string;
  onChange?: (value: string) => void;
  qa?: string;
}
