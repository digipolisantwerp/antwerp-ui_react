import { ReactElement, ReactNode } from 'react';
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

export function labelWrapper(children: ReactElement, label?: string, id?: string, labelId?: string) {
  if (label) {
    return (
      <div className="a-input">
        <label className="a-input__label" id={labelId} htmlFor={id}>
          {label}
        </label>
        {children}
      </div>
    );
  } else {
    return children;
  }
}
