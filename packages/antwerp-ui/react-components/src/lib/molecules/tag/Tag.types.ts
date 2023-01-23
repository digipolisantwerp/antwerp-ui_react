import { MouseEvent } from 'react';

export interface TagProps {
  label: string;
  name?: string;
  active?: boolean;
  removable?: boolean;
  isToggle?: boolean;
  iconLeft?: string;
  qa?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
}
