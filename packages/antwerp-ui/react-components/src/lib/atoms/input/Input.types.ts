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
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: MouseEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: InputTypes;
}

export interface TextAreaProps extends InputProps {
  onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onClick?: (e: MouseEvent<HTMLTextAreaElement>) => void;
  onFocus?: (e: FocusEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
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
