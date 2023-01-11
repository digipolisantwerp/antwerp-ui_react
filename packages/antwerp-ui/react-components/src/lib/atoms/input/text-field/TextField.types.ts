import { ChangeEvent, FocusEvent, MouseEvent, KeyboardEvent } from 'react';

export interface TextFieldProps {
  addonLeft?: string;
  addonRight?: string;
  charCounter?: boolean;
  description?: string;
  disabled?: boolean;
  iconLeft?: string;
  iconRight?: string;
  id?: string;
  inline?: boolean;
  label?: string;
  maxLength?: number;
  name?: string;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: MouseEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  qa?: string;
  readOnly?: boolean;
  required?: boolean;
  size?: 'small' | 'medium' | 'large';
  state?: 'success' | 'error';
  type?: InputTypes;
  value?: string;
}

export type LabelProps = Pick<TextFieldProps, 'label' | 'required' | 'inline' | 'id'>;
export type DescriptionProps = Pick<TextFieldProps, 'description' | 'state'>;
export type CharacterCounterProps = {
  charCounter?: boolean;
  characterCount: number;
  maxLength?: number;
};

type InputTypes =
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'month'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';
