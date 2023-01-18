import { renderHTMLLink } from '../../../utils/render.utils';
import { BreadcrumbProps } from './Breadcrumb.types';

export function Breadcrumb({ title, items, renderLink, qa }: BreadcrumbProps) {
  const renderItems = () => items.map((i) => <li>{renderLink ? renderLink(i) : renderHTMLLink(i)}</li>);
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
