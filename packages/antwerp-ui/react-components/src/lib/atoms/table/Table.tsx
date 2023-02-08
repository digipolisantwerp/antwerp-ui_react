import { TableProps } from './Table.types';
import { classNames } from '../../../utils/dom.utils';
import { TableHeader } from './TableHeader';
import { TableBody } from './TableBody';
import { useHorizontalScroll } from '../../../utils/custom.hooks';

export function Table({
  id,
  sort,
  sortDirection,
  rows,
  columns,
  qa,
  striped,
  small,
  open,
  selectable,
  selected,
  onSelect,
  onSelectAll,
  onSortClick,
  actions,
  responsive,
  fixedColumnRight,
  fixedColumnLeft
}: TableProps) {
  const [scrollDivRef, handleScroll, isScrollStart, isScrollEnd] = useHorizontalScroll();

  const tableClasses = classNames({
    'a-table': true,
    'a-table--striped': !!striped,
    'a-table--open': !!open
  });

  const responsiveWrapperClasses = classNames({
    'a-table-responsive-wrapper': !!responsive,
    'has-shadow-left': !!responsive && !isScrollStart,
    'has-shadow-right': !!responsive && !isScrollEnd,
    'has-first-column-fixed': !!fixedColumnLeft,
    'has-last-column-fixed': !!fixedColumnRight
  });

  const table = (
    <table id={id} className={tableClasses} data-qa={qa}>
      <TableHeader
        tableId={id}
        small={small}
        selectable={selectable}
        selected={selected}
        columns={columns}
        sort={sort}
        rows={rows}
        onSortClick={onSortClick}
        sortDirection={sortDirection}
        onSelectAll={onSelectAll}
        actions={actions}
      />
      <TableBody
        tableId={id}
        small={small}
        selectable={selectable}
        selected={selected}
        columns={columns}
        rows={rows}
        onSelect={onSelect}
        actions={actions}
      />
    </table>
  );

  return responsive ? (
    <div className={responsiveWrapperClasses} data-qa={qa}>
      <div ref={scrollDivRef} onScroll={handleScroll} className="a-table-scrollable-wrapper">
        {table}
      </div>
    </div>
  ) : (
    table
  );
}

Table.defaultProps = {
  id: 'aui-table',
  columns: [],
  rows: []
};

export default Table;
