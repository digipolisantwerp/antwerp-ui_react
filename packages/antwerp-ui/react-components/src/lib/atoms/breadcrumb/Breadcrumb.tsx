import { renderHTMLLink } from '../../../utils/render.utils';
import { BreadcrumbProps } from './Breadcrumb.types';

export function Breadcrumb({ title, items, renderLinkFunction, qa }: BreadcrumbProps) {
  const renderItems = () =>
    Array.isArray(items)
      ? items.map((i) => (
          <li key={i.label || i.href}>{renderLinkFunction ? renderLinkFunction(i) : renderHTMLLink(i)}</li>
        ))
      : null;

  const renderTitle = () => {
    if (title && title.label) {
      const TitleTag = title.tag || ('h1' as keyof JSX.IntrinsicElements);
      return <TitleTag className={`${title.className || ''} u-margin-top-xxs`}>{title.label}</TitleTag>;
    }
    return null;
  };

  return (
    <>
      <ul className="a-breadcrumb" data-qa={qa}>
        {renderItems()}
      </ul>
      {renderTitle()}
    </>
  );
}

Breadcrumb.defaultProps = {
  items: []
};

export default Breadcrumb;
