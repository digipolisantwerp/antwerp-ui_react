import { MouseEvent } from 'react';

export interface TagProps {
  label: string;
  name?: string;
  active?: boolean;
  removable?: boolean;
  isToggle?: boolean;
  iconLeft?: string;
  qa?: string;
  ariaLabelDelete?: string;
  onClick?: (name: string) => void;
}
