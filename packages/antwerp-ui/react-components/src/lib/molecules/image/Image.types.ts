import { ReactElement } from 'react';

export interface ImageProps {
  alt?: string;
  noClass?: boolean;
  children?: ReactElement;
  src: string;
  qa?: string;
}
