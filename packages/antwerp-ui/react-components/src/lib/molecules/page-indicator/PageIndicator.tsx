import React, { KeyboardEvent } from 'react';
import { classNames } from '../../../utils/dom.utils';
import { PageIndicatorProps } from './PageIndicator.types';
import { DEFAULT_SIZE, SIZE_MAP } from '../../../constants/layout.settings';

// Keyboard and Tab handling according to ARIA spec
// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role

export function PageIndicator({ qa, size, pages, activePage, onPageChange }: PageIndicatorProps) {
  const [focusedIndex, setFocusedIndex] = React.useState(0);

  const handleFocus = (index: number) => setFocusedIndex(index);

  const clickHandler = (pageId: string) => () => onPageChange && onPageChange(pageId);

  const handleArrowNavigation = (e: KeyboardEvent<HTMLDivElement>) => {
    const isLeft = e.key === 'ArrowLeft';
    const isRight = e.key === 'ArrowRight';
    if (isLeft || isRight) {
      document.getElementById(activePage)?.setAttribute('tabindex', '-1');
      let newFocusedIndex = focusedIndex;
      if (isRight) {
        newFocusedIndex = focusedIndex + 1 >= pages.length ? 0 : focusedIndex + 1;
        setFocusedIndex(newFocusedIndex);
      }
      if (isLeft) {
        newFocusedIndex = focusedIndex - 1 < 0 ? pages.length - 1 : focusedIndex - 1;
        setFocusedIndex(newFocusedIndex);
      }
      const nextElementToFocusId = pages[newFocusedIndex].id;
      if (nextElementToFocusId) {
        const elToFocus = document.getElementById(nextElementToFocusId);
        elToFocus?.setAttribute('tabindex', '0');
        pages
          .filter((p) => p.id !== nextElementToFocusId)
          .forEach((p) => {
            document.getElementById(p.id)?.setAttribute('tabindex', '-1');
          });
        elToFocus?.focus();
      }
    }
  };

  const classes = classNames({
    'a-page-indicator': true,
    [`a-page-indicator--${SIZE_MAP[size || DEFAULT_SIZE]}`]: !!size
  });

  return (
    <div className={classes} data-qa={qa} onKeyDown={handleArrowNavigation} role="tablist">
      {pages?.map((page, index) => {
        const isActive = !!activePage && activePage === page.id;
        const classes = classNames({
          'a-page-indicator__item': true,
          'is-active': isActive
        });
        return (
          <button
            key={page.id}
            id={page.id}
            role="tab"
            className={classes}
            aria-label={page.ariaLabel}
            aria-selected={isActive ? 'true' : 'false'}
            aria-controls={page.ariaControls}
            tabIndex={isActive ? 0 : -1}
            onClick={clickHandler(page.id)}
            onFocus={() => handleFocus(index)}
          ></button>
        );
      })}
    </div>
  );
}

export default PageIndicator;
