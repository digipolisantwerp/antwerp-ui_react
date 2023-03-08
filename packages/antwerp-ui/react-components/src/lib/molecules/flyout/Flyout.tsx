import React, { cloneElement, ForwardedRef, forwardRef, useImperativeHandle } from 'react';
import ReactDOM from 'react-dom';
import { DEFAULT_SIZE, SIZE_MAP } from '../../../constants/layout.settings';
import { classNames } from '../../../utils/dom.utils';
import { FlyoutProps } from './Flyout.types';

export const Flyout = forwardRef(function Flyout(
  { trigger, open, hasPadding, orientation, size, children, scrollable, onStateChange, qa }: FlyoutProps,
  forwardRef: ForwardedRef<null>
) {
  const [isOpen, setIsOpen] = React.useState(!!open);
  const showFlyout = open === false || open === true ? open : isOpen;

  const flyoutRef = React.useRef(null);
  useImperativeHandle(forwardRef, () => flyoutRef.current);

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
    if (showFlyout) {
      document.addEventListener('click', _handleOutsideClick, false);
    } else {
      document.removeEventListener('click', _handleOutsideClick, false);
    }
  }, [_handleOutsideClick, showFlyout]);

  const _toggleIsOpen = () => {
    setIsOpen(!showFlyout);
    initEventHandlers();
    onStateChange && onStateChange(!showFlyout);
  };

  React.useEffect(() => {
    initEventHandlers();
  }, [initEventHandlers]);

  const flyoutClasses = classNames({
    'm-flyout': true,
    'is-open': !!showFlyout,
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
    <div className={flyoutClasses} ref={flyoutRef} aria-haspopup="true" aria-expanded={showFlyout} data-qa={qa}>
      {cloneElement(trigger, { onClick: _toggleIsOpen })}
      <div className={flyoutContentClasses} {...(scrollable ? { tabIndex: 0 } : {})}>
        {children}
      </div>
    </div>
  ) : null;
});

Flyout.defaultProps = {
  hasPadding: true,
  scrollable: false
};

export default Flyout;
