import { CardProps } from './Card.types';
import { Image } from '../image';
import { renderHTMLLink } from '../../../utils/render.utils';

export function Card({ titleId, title, subTitle, content, image, link, qa }: CardProps) {
  return (
    <div className="m-card" data-qa={qa}>
      {!!image && (
        <div className="m-card__image">
          <Image noClass {...image} />
        </div>
      )}
      <div className="m-card__body">
        {!!title && (
          <h4 id={`${titleId}`} className="h5 u-margin-bottom-xs">
            {title}
          </h4>
        )}
        {!!subTitle && <p className="small u-text-bold u-margin-bottom-xs">{subTitle}</p>}
        {!!content && <p className="u-margin-bottom">{content}</p>}
        {!!link && (
          <p className="u-text-right">
            {renderHTMLLink({ ...link, href: link.href ?? '#' }, 'arrow-right-1', {
              className: 'has-icon-right',
              'aria-labelledby': titleId
            })}
          </p>
        )}
      </div>
    </div>
  );
}

Card.defaultProps = {
  titleId: 'aui-card-title'
};

export default Card;
