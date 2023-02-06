import { Children, ReactNode } from 'react';
import { classNames } from '../../../utils/dom.utils';
import { wrapWithIf } from '../../../utils/render.utils';
import { TagListProps } from './TagList.types';

export function TagList({ children = [], qa }: TagListProps) {
  const classes = classNames({
    'o-tag-list': true
  });

  return (
    <ul className={classes} data-qa={qa}>
      {Children.map(children, (child: ReactNode) => {
        return wrapWithIf(child, <li className="o-tag-list__item"></li>, true);
      })}
    </ul>
  );
}

export default TagList;
