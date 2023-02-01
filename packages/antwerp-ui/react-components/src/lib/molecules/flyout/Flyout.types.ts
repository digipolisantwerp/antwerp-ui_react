import { ReactElement, ReactNode } from 'react';

export interface FlyoutProps {
  trigger?: ReactElement;
  orientation?: 'upper-left' | 'upper-right' | 'bottom-left' | 'bottom-right';
  size?: 'small' | 'medium';
  hasPadding?: boolean;
  open?: boolean;
  scrollable?: boolean;
  onStateChange?: (newOpenState: boolean) => void;
  children?: ReactNode;
  qa?: string;
}
