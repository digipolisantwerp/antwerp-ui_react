import { MouseEventHandler } from 'react';

export interface SwitchProps {
  ariaLabel?: string;
  checked?: boolean;
  disabled?: boolean;
  id?: string;
  internalIOLabels?: boolean;
  label?: string;
  labelId?: string;
  statusLabelOff?: string;
  statusLabelOn?: string;
  statusLabelSide?: 'left' | 'right';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  qa?: string;
}
