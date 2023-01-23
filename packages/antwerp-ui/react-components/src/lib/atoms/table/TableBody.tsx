import { classNames } from '../../../utils/dom.utils';
import { wrapWithIf } from '../../../utils/render.utils';
import { Button } from '../button';
import { Checkbox } from '../checkbox';
import { TableBodyProps } from './Table.types';

// TODO-NT USE BUTTON GROUP
export function TableBody({
  actions,
  columns,
  small,
  tableId,
  selectable,
  onSelect,
  selected = [],
  rows
}: TableBodyProps) {
  const rowClasses = classNames({
    'is-clickable': !!selectable
  });
  return (
    <tbody>
      {rows.map((row) => (
        <tr className={rowClasses} key={row?.id}>
          {selectable ? (
            <td>
              <Checkbox
                name={`aui-table-checkbox-${tableId}-${row.id}`}
                id={`aui-table-checkbox-row-${tableId}-${row.id}`}
                checked={(selected || []).includes(row.id)}
                onChange={(e) => onSelect && onSelect(e, row.id)}
              />
            </td>
          ) : null}
          {columns.map((col) => {
            const tdClasses = classNames({
              'u-text-right': !!col.alignRight,
              'u-text-bold': col.dataType === 'primary',
              small: col.dataType === 'secondary',
              'is-condensed': !!small
            });
            return (
              <td className={tdClasses} key={col?.value}>
                {row[col?.value] || null}
              </td>
            );
          })}
          {wrapWithIf(
            actions?.buttons?.map((x) => (
              <Button
                onClick={(ev) => x?.onActionClick && x?.onActionClick(ev, row.id)}
                key={`aui-table-action-${tableId}-${x?.id}-${row.id}`}
                {...x}
                id={`aui-table-action-${tableId}-${x?.id}-${row.id}`}
                size="small"
              >
                {x?.label}
              </Button>
            )) || null,
            <td></td>,
            !!actions?.buttons?.length
          )}
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
