import { cloneElement, ReactElement, ReactNode } from 'react';
import { Link } from '../constants/application.types';
import { Size } from '../constants/layout.settings';
import { Avatar } from '../lib/atoms/avatar';
import { ButtonProps } from '../lib/atoms/button';
import { ButtonAddOnProps } from '../lib/atoms/button/Button.types';
import { Spinner } from '../lib/atoms/spinner';
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

export function renderAddOn(addOn?: ButtonAddOnProps, size?: 'small' | 'medium' | 'large'): JSX.Element | null {
  if (addOn?.type === 'spinner') {
    return <Spinner size={size === Size.S ? Size.XS : Size.S} />;
  } else if (addOn?.type === 'avatar') {
    return <Avatar {...addOn?.avatarProps} size={size} />;
  } else if (addOn?.type === 'icon') {
    return <Icon {...addOn?.iconProps} />;
  }
  return null;
}
