import { ChangeEvent, FocusEvent, MouseEvent, KeyboardEvent } from 'react';

interface InputProps {
  charCounter?: boolean;
  description?: string;
  disabled?: boolean;
  id?: string;
  inline?: boolean;
  label?: string;
  maxLength?: number;
  name?: string;
  qa?: string;
  readOnly?: boolean;
  required?: boolean;
  size?: 'small' | 'medium' | 'large';
  state?: 'success' | 'error';
  value?: string;
}

export interface TextFieldProps extends InputProps {
  addonLeft?: string;
  addonRight?: string;
  iconLeft?: string;
  iconRight?: string;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: MouseEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  type?: InputTypes;
}

export interface TextAreaProps extends InputProps {
  onBlur?: (event: FocusEvent<HTMLTextAreaElement>) => void;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClick?: (event: MouseEvent<HTMLTextAreaElement>) => void;
  onFocus?: (event: FocusEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
}

export type LabelProps = Pick<TextFieldProps, 'label' | 'required' | 'inline' | 'id'>;
export type DescriptionProps = Pick<TextFieldProps, 'description' | 'state'>;
export type CharacterCounterProps = {
  charCounter?: boolean;
  characterCount: number;
  maxLength?: number;
  id?: string;
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
