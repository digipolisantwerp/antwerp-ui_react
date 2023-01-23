import { Table } from '@acpaas-ui/react-components';
import {
  TableColumnSchema,
  TableRowSchema
} from 'packages/antwerp-ui/react-components/src/lib/atoms/table/Table.types';
import { useState } from 'react';

const COLUMNS_EXAMPLE: TableColumnSchema[] = [
  {
    label: 'Snack',
    value: 'snack',
    sortable: true,
    dataType: 'primary'
  },
  {
    label: 'Description',
    value: 'description',
    sortable: true,
    dataType: 'secondary'
  },
  {
    label: 'Stock',
    value: 'stock',
    alignRight: true,
    dataType: 'secondary'
  },
  {
    label: 'Price',
    value: 'price',
    alignRight: true
  }
];

const ROWS_EXAMPLE: TableRowSchema[] = [
  {
    id: '0',
    snack: 'Ice cream',
    description: 'Tasty, frozen treat for a hot day',
    stock: 160,
    price: '€2,49'
  },
  {
    id: '1',
    snack: 'Chips',
    description: 'Salty, crunchy goodness',
    stock: 48,
    price: '€1,99'
  },
  {
    id: '2',
    snack: 'Candy bar',
    description: 'Chewy and quite nutty',
    stock: 240,
    price: '€1,49'
  }
];

export function TableExamples() {
  const [event, setEvent] = useState('none');
  return (
    <>
      <h1 className="u-margin-bottom">Table</h1>
      <p>Last event: {event}</p>
      <div className="u-margin">
        <Table
          id="table-1"
          selectable
          responsive
          striped
          open
          columns={COLUMNS_EXAMPLE}
          rows={ROWS_EXAMPLE}
          sort="snack"
          selected={['0']}
          onSelect={(_, id) => setEvent(`onSelect:${id}`)}
          onSelectAll={() => setEvent(`onSelect:all`)}
          sortDirection="descending"
          onSortClick={(_, col) => setEvent(`sortClick:${col}`)}
          actions={{
            label: 'Acties',
            buttons: [
              { label: 'Kopen', id: 'buy', onActionClick: (_, rowId) => setEvent(`buy:${rowId}`) },
              {
                label: 'Verwijder',
                id: 'delete',
                theme: 'danger',
                iconLeft: 'close',
                onActionClick: (_, rowId) => setEvent(`delete:${rowId}`)
              }
            ]
          }}
        />
      </div>
    </>
  );
}

export default TableExamples;
