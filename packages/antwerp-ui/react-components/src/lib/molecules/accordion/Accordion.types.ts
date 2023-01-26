import { ReactNode } from 'react';

export interface AccordionProps {
  children?: ReactNode | ReactNode[];
  type?: 'open';
  qa?: string;
}

export interface AccordionTabProps {
  id?: string;
  header: ReactNode;
  children: ReactNode | ReactNode[];
  onToggle?: (id?: string) => void;
  open?: boolean;
  qa?: string;
}
