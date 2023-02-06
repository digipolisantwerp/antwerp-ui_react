import { SORT_ASCENDING, SORT_DESCENDING } from '../../../constants/settings';
import { classNames } from '../../../utils/dom.utils';
import { wrapWithIf } from '../../../utils/render.utils';
import { Checkbox } from '../checkbox';
import { TableHeaderProps } from './Table.types';

export function TableHeader({
  columns,
  selectable,
  selected = [],
  rows = [],
  onSelectAll,
  sort,
  small,
  sortDirection,
  tableId,
  onSortClick,
  actions
}: TableHeaderProps) {
  const allSelected =
    selected.length &&
    selected.sort().join(',') ===
      rows
        .map((r) => r.id)
        .sort()
        .join(',');

  return (
    <thead>
      <tr>
        {selectable ? (
          <th>
            <Checkbox
              name={`aui-table-checkbox-${tableId}-all`}
              id={`aui-table-checkbox-${tableId}-all`}
              checked={!!allSelected}
              indeterminate={!!selected.length && !allSelected}
              onChange={onSelectAll}
            />
          </th>
        ) : null}
        {columns.map((col) => {
          const thClasses = classNames({
            'u-text-right': !!col.alignRight,
            'is-collapsed': !!col.sortable,
            'is-condensed': !!small
          });

          const isAscending = sort === col?.value && sortDirection === SORT_ASCENDING;
          const isDescending = sort === col?.value && sortDirection === SORT_DESCENDING;

          const thSortClasses = classNames({
            'a-table__sort-button': true,
            'a-table__sort-button--unsorted': sort !== col?.value,
            'a-table__sort-button--sorted-asc': isAscending,
            'a-table__sort-button--sorted-desc': isDescending
          });

          return (
            <th
              key={col?.value}
              className={thClasses}
              {...(col.sortable &&
                (isAscending || isDescending) && { 'aria-sort': isAscending ? SORT_ASCENDING : SORT_DESCENDING })}
              {...(col.sortable && { 'aria-live': 'polite' })}
            >
              {wrapWithIf(
                col?.label,
                <button onClick={(e) => onSortClick && onSortClick(col.value)} className={thSortClasses}></button>,
                !!col?.sortable
              )}
            </th>
          );
        })}
        {actions?.buttons?.length ? <th>{actions?.label}</th> : null}
      </tr>
    </thead>
  );
}

export default TableHeader;
