import Button from '../../../../button';
import classnames from 'classnames';
import React from 'react';

type Props = {
  as: string,
  classList: string[],
  className: string,
  label: string,
  value: string,
  component: Function,
  disableSorting: boolean,
  sorting: {
    key: string,
    order: 'asc' | 'desc',
  },
  onSortClick: Function,
  width: string,
  hideLabel: boolean,
}

const TableHeader = ({
  sorting = { key: '', order: 'asc' },
  as: HTMLTag = 'th',
  classList,
  className,
  component,
  hideLabel,
  disableSorting,
  label,
  value = '',
  onSortClick,
  width,
}: Props) => {
  const style = width ? {
    width,
  } : {};

  const renderTableHeader = () => {
    if (hideLabel) {
      return;
    }

    if (component) {
      return component(value, label);
    }
    if (disableSorting) {
      return label;
    }

    const sortIcon = sorting.key === value ? `ai-arrow-${sorting.order === 'asc' ? 'up' : 'down'}-1` : 'ai-move-expand-vertical';
    const newOrder = sorting.order === 'asc' ? 'desc' : 'asc';

    return (
      <Button
        className="a-table__header-button"
        iconRight={sortIcon}
        onClick={() => onSortClick(value, newOrder)}
        size="tiny"
        type="transparent"
      >
        {label}
      </Button>
    );
  };

  return (
    <HTMLTag style={style} className={classnames(className, classList)}>
      {renderTableHeader()}
    </HTMLTag>
  );
};

export default TableHeader;
