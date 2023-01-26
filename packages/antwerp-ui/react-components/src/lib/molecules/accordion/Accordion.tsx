import { AccordionProps } from './Accordion.types';
import { classNames } from '../../../utils/dom.utils';

export function Accordion({ children = [], type, qa }: AccordionProps) {
  const accordionClass = classNames({
    'm-accordion': true,
    'm-accordion--open': type === 'open'
  });

  return (
    <div className={accordionClass} data-qa={qa}>
      {children}
    </div>
  );
}

export default Accordion;
