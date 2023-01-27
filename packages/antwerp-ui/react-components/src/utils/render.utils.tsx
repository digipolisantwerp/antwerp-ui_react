import { cloneElement, ReactElement, ReactNode } from 'react';
import { Link } from '../constants/application.types';
import { Icon } from '../lib/base/icon';

export function wrapWithIf(toWrap: ReactNode, wrapper: ReactElement, condition: boolean): ReactNode {
  return condition ? cloneElement(wrapper, { children: toWrap }) : (toWrap as JSX.Element);
}

export function renderHTMLLink(
  link: Link,
  icon?: string,
  props?: { className?: string; 'aria-labelledby'?: string }
): ReactNode {
  if (!link?.href) {
    return link?.label || '';
  }
  return (
    <a href={link.href} target={link.target || '_self'} {...props}>
      {link.label || ''}
      {icon ? <Icon name={icon} /> : null}
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
