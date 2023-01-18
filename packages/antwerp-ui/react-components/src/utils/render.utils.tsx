import { ReactNode } from 'react';
import { Link } from '../constants/application.types';

export function renderHTMLLink(link: Link): ReactNode {
  if (!link.href) {
    return link.label || '';
  }
  return (
    <a href={link.href} target={link.target || '_self'}>
      {link.label || ''}
    </a>
  );
}
