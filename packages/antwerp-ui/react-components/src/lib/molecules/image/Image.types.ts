import { ReactElement } from 'react';

export interface ImageProps {
  alt?: string;
  children?: ReactElement;
  src: string;
  qa?: string;
}
