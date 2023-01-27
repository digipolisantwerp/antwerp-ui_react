import { renderHTMLLink } from '../../../utils/render.utils';
import { Button } from '../../atoms/button';
import { FooterProps } from './Footer.types';

export function Footer({ backToTop, backToTopAriaLabel, items, qa }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const renderItems = () =>
    items?.map((i, index) => {
      const item = renderHTMLLink(i);
      const addDivider = items.length > 1 && index !== items.length - 1;
      return (
        <>
          {item}${addDivider ? ' | ' : ''}
        </>
      );
    });

  return (
    <footer className="o-footer" data-qa={qa} data-testId={qa}>
      <span className="o-footer__label">{renderItems()}</span>
      {backToTop && (
        <Button
          className="o-footer__button"
          icon="arrow-up-1"
          onClick={scrollToTop}
          ariaLabel={backToTopAriaLabel}
          theme="danger"
        />
      )}
    </footer>
  );
}

Footer.default = {
  items: [],
  ariaLabel: 'Go back to top'
};

export default Footer;
