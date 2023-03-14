import { Table } from '@acpaas-ui/react-components';
import {
  TableColumnSchema,
  TableRowSchema
} from 'packages/antwerp-ui/react-components/src/lib/atoms/table/Table.types';
import { ReactNode, useState } from 'react';

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
  },
  {
    label: 'Year',
    value: 'date',
    transformFunction: (value: ReactNode): ReactNode => {
      const date = value as string;
      return date.slice(0, 4);
    }
  }
];

const ROWS_EXAMPLE: TableRowSchema[] = [
  {
    id: '0',
    snack: 'Ice cream',
    description: 'Tasty, frozen treat for a hot day',
    stock: 160,
    price: '€2,49',
    date: '2022-10-10'
  },
  {
    id: '1',
    snack: 'Chips',
    description: 'Salty, crunchy goodness',
    stock: 48,
    price: '€1,99',
    date: '2021-10-10'
  },
  {
    id: '2',
    snack: 'Candy bar',
    description: 'Chewy and quite nutty',
    stock: (
      <p>
        <b>240</b>
      </p>
    ),
    price: '€1,49',
    date: '2020-10-10'
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
          onSelect={(id) => setEvent(`onSelect:${id}`)}
          onSelectAll={() => setEvent(`onSelect:all`)}
          sortDirection="descending"
          onSortClick={(col) => setEvent(`sortClick:${col}`)}
          actions={{
            label: 'Acties',
            buttons: [
              {
                label: 'Verwijder',
                id: 'delete',
                theme: 'danger',
                addOn: { type: 'icon', align: 'left', iconProps: { name: 'close' } },
                onActionClick: (_ev, rowId) => setEvent(`delete:${rowId}`)
              }
            ]
          }}
        />
      </div>
    </>
  );
}

export default TableExamples;
