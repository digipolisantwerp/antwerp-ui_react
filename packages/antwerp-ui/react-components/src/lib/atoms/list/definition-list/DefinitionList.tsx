import { Fragment } from 'react';
import { DefinitionListProps } from '../list.types';

export function DefinitionList({ items, qa }: DefinitionListProps) {
  return (
    <dl className="a-definition-list" data-qa={qa}>
      {items.map((i) => (
        <Fragment key={i.term}>
          <dt>{i.term}</dt>
          <dd>{i.description}</dd>
        </Fragment>
      ))}
    </dl>
  );
}

DefinitionList.defaultProps = {
  items: []
};

export default DefinitionList;
