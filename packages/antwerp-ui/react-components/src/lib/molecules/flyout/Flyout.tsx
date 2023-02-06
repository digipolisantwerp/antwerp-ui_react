import React, { cloneElement } from 'react';
import ReactDOM from 'react-dom';
import { DEFAULT_SIZE, SIZE_MAP } from '../../../constants/layout.settings';
import { classNames } from '../../../utils/dom.utils';
import { FlyoutProps } from './Flyout.types';

export function Flyout({
  trigger,
  open,
  hasPadding,
  orientation,
  size,
  children,
  scrollable,
  onStateChange,
  qa
}: FlyoutProps) {
  const [isOpen, setIsOpen] = React.useState(!!open);

  const flyoutRef = React.useRef(null);

  const _handleOutsideClick = React.useCallback(
    (e: MouseEvent) => {
      const area = ReactDOM.findDOMNode(flyoutRef.current);
      if (area && !area.contains(e.target as HTMLInputElement)) {
        setIsOpen(false);
        onStateChange && onStateChange(false);
      }
    },
    [onStateChange]
  );

  const initEventHandlers = React.useCallback(() => {
    if (isOpen) {
      document.addEventListener('click', _handleOutsideClick, false);
    } else {
      document.removeEventListener('click', _handleOutsideClick, false);
    }
  }, [_handleOutsideClick, isOpen]);

  const _toggleIsOpen = () => {
    setIsOpen(!isOpen);
    initEventHandlers();
    onStateChange && onStateChange(!isOpen);
  };

  React.useEffect(() => {
    initEventHandlers();
  }, [initEventHandlers]);

  const flyoutClasses = classNames({
    'm-flyout': true,
    'is-open': !!isOpen,
    'u-text-right': !!orientation?.includes('right'),
    [`m-flyout--${orientation}`]: !!orientation,
    [`m-flyout--${SIZE_MAP[size || DEFAULT_SIZE]}`]: !!size,
    'm-flyout--scrollable': !!scrollable
  });

  const flyoutContentClasses = classNames({
    'm-flyout__content': true,
    'has-padding': !!hasPadding
  });

  return trigger ? (
    <div className={flyoutClasses} ref={flyoutRef} aria-haspopup="true" aria-expanded={isOpen} data-qa={qa}>
      {cloneElement(trigger, { onClick: _toggleIsOpen })}
      <div className={flyoutContentClasses}>{children}</div>
    </div>
  ) : null;
}

Flyout.defaultProps = {
  hasPadding: true,
  scrollable: false,
  open: false
};

export default Flyout;
