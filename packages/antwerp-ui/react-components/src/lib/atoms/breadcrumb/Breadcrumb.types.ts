import { ReactNode } from 'react';
import { Link, Title } from '../../../constants/application.types';

export interface BreadcrumbProps {
  qa?: string;
  title?: Title;
  items: Link[];
  renderLink?: (link: Link) => ReactNode;
}
