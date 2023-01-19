import { ReactElement } from 'react';

export interface TooltipProps {
  anchor: ReactElement;
  text: string;
  anchorId: string;
  location?: 'top' | 'right' | 'left' | 'bottom';
  qa?: string;
}
