import { classNames } from '../../../../utils/dom.utils';
import { MouseEvent } from 'react';
import { Icon } from '../../../base/icon';
import { ListItemProps } from '../list.types';

export function ListItem({
  name,
  link,
  active,
  highlighted,
  iconLeft,
  iconRight,
  children,
  onClick,
  onMouseDown,
  tabIndex,
  qa
}: ListItemProps) {
  const ItemTag = `${link && (link.href || link.href === '') ? 'a' : 'span'}` as keyof JSX.IntrinsicElements;

  const listItemContentClasses = classNames({
    'a-list__content': true,
    'is-highlighted': !!highlighted,
    'is-active': !!active
  });

  const onLinkClick = (event: MouseEvent) => {
    if (onClick) {
      event.preventDefault();
      onClick(name);
    }
  };

  return (
    <li className="a-list__item" data-qa={qa}>
      <ItemTag
        className={listItemContentClasses}
        onClick={onLinkClick}
        onMouseDown={onMouseDown}
        tabIndex={tabIndex}
        {...(link && (link.href || link.href === '') ? { href: link.href } : {})}
      >
        {iconLeft && <Icon name={iconLeft} />}
        <span className="a-list__text">{children}</span>
        {iconRight && <Icon name={iconRight} />}
      </ItemTag>
    </li>
  );
}

export default ListItem;
