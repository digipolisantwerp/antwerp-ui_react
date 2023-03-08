import { NavigationListProps, NavigationListItemProps } from './NavigationList.types';
import { classNames } from '../../../utils/dom.utils';
import { MouseEvent } from 'react';
import { useHorizontalScroll } from '../../../utils/custom.hooks';

export function NavigationList({ items, border, ariaLabel, onItemClick, direction, qa }: NavigationListProps) {
  const [scrollDivRef, handleScroll, isScrollStart, isScrollEnd] = useHorizontalScroll();

  const navClass = classNames({
    'm-nav-list': direction === 'vertical',
    'm-nav-tabs': direction !== 'vertical',
    'has-border': !!border,
    'has-shadow-left': direction !== 'vertical' && !isScrollStart,
    'has-shadow-right': direction !== 'vertical' && !isScrollEnd
  });

  const onClick = (event: MouseEvent<HTMLElement>, item: NavigationListItemProps, position: number) => {
    if (onItemClick && !item.disabled) {
      event.preventDefault();
      event.stopPropagation();
      onItemClick(item.id, position);
    }
  };

  const renderNavigationItem = (item: NavigationListItemProps, index: number) => {
    const itemClass = classNames({
      'is-active': !!item.active,
      'is-disabled': !!item.disabled
    });
    return (
      <li key={item.id} className={itemClass}>
        <a
          href={item.href}
          onClick={(e) => onClick(e, item, index)}
          {...(item.disabled ? { 'aria-disabled': 'true' } : {})}
          {...(item.active ? { 'aria-current': 'true' } : {})}
        >
          {item.label}
        </a>
      </li>
    );
  };

  return (
    <nav role="navigation" className={navClass} aria-label={ariaLabel} data-qa={qa}>
      <ul ref={scrollDivRef} onScroll={handleScroll} {...(!isScrollStart || !isScrollEnd ? { tabIndex: 0 } : {})}>
        {items.map(renderNavigationItem)}
      </ul>
    </nav>
  );
}

NavigationList.defaultProps = {
  items: [],
  direction: 'horizontal',
  ariaLabel: 'Navigatie'
};

export default NavigationList;
