import { DefinitionListProps } from '../list.types';

export function DefinitionList({ items, qa }: DefinitionListProps) {
  return (
    <dl className="a-definition-list" data-qa={qa}>
      {items.map((i) => (
        <>
          <dt>{i.term}</dt>
          <dd>{i.description}</dd>
        </>
      ))}
    </dl>
  );
}

DefinitionList.defaultProps = {
  items: []
};

export default DefinitionList;
