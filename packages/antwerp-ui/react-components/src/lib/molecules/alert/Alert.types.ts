import { MouseEventHandler, ReactNode } from 'react';

export interface AlertProps {
  ariaLabelClose?: string;
  cancelLabel?: string;
  children?: ReactNode;
  confirmLabel?: string;
  modal?: boolean;
  onCancel?: MouseEventHandler<HTMLButtonElement>;
  onClose?: MouseEventHandler<HTMLButtonElement>;
  onConfirm?: MouseEventHandler<HTMLButtonElement>;
  qa?: string;
  theme?: 'success' | 'warning' | 'danger';
  title?: string;
  titleId?: string;
}
