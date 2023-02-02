import { ReactElement, ReactNode } from 'react';

export interface ModalProps {
  appRootId: string;
  ariaCloseLabel?: string;
  cancelText?: string;
  children: ReactNode;
  closeButton?: boolean;
  confirmText?: string;
  onAfterOpen?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
  onConfirm?: () => void;
  open?: boolean;
  qa?: string;
  showCancel?: boolean;
  showConfirm?: boolean;
  size?: '' | 'large';
  title?: string;
  trigger?: ReactElement;
}
