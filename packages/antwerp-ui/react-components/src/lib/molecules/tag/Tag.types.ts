import { MouseEvent } from 'react';

export interface TagProps {
  label: string;
  name?: string;
  active?: boolean;
  removable?: boolean;
  isToggle?: boolean;
  iconLeft?: string;
  qa?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
}
