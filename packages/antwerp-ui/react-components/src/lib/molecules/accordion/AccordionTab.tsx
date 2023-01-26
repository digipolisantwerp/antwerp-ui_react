import React from 'react';
import { classNames } from '../../../utils/dom.utils';
import { AccordionTabProps } from './Accordion.types';

export function AccordionTab({ id, header, children, open, onToggle, qa }: AccordionTabProps) {
  const [isOpen, setIsOpen] = React.useState(!!open);
  const openState = open === true || open === false ? open : isOpen;

  const accordionTabClass = classNames({
    'm-accordion__tab': true
  });

  const _toggle = () => {
    setIsOpen(!isOpen);
    return onToggle && onToggle(id);
  };

  return (
    <div className={accordionTabClass} data-qa={qa}>
      <button id={id} className="m-accordion__header" aria-expanded={openState} onClick={_toggle}>
        {header}
      </button>
      <div style={openState ? { maxHeight: 'none' } : {}} className="m-accordion__content">
        <div className="u-margin-xs">{children}</div>
      </div>
    </div>
  );
}

AccordionTab.defaultProps = {
  id: '',
  header: ''
};

export default AccordionTab;
