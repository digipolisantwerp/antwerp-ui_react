Full fledged table:
```js
const { TABLE_MOCK_COLUMNS, TABLE_MOCK_ROWS, TABLE_MOCK_NESTED_ROWS, TABLE_MOCK_FILTER } = require('./src/mocks/Table.mock.js');

const [sorting, setSorting] = React.useState();
const [pagination, setPagination] = React.useState({
  itemsPerPage: 10,
  totalItems: 1829,
  currentPage: 1
});

<Table
  tableId="1"
  columns={TABLE_MOCK_COLUMNS()}
  rows={TABLE_MOCK_ROWS.slice(0, 10)}
  filters={TABLE_MOCK_FILTER}
  sorting={sorting}
  sortingChanged={(e) => console.log('sorting changed', e) || setSorting(e)}
  paginationChanged={(e) => console.log('pagination changed', e) || setPagination(e)}
  filtersChanged={(e) => console.log('filters changed', e)}
  itemsPerPage={pagination.itemsPerPage}
  totalItems={pagination.totalItems}
  currentPage={pagination.currentPage}
/>
```

Loading table
```js
const { TABLE_MOCK_COLUMNS, TABLE_MOCK_ROWS, TABLE_MOCK_NESTED_ROWS } = require('./src/mocks/Table.mock.js');

<Table tableId="2" columns={TABLE_MOCK_COLUMNS()} rows={TABLE_MOCK_ROWS.slice(0, 5)} loading={true} />
```

Without column sorting
```js
const { TABLE_MOCK_COLUMNS, TABLE_MOCK_ROWS, TABLE_MOCK_NESTED_ROWS } = require('./src/mocks/Table.mock.js');

<Table tableId="2" columns={TABLE_MOCK_COLUMNS()} rows={TABLE_MOCK_ROWS.slice(0, 2)} disableColumnSorting={true} />
```

Styles
```js
const { TABLE_MOCK_COLUMNS, TABLE_MOCK_ROWS, TABLE_MOCK_NESTED_ROWS } = require('./src/mocks/Table.mock.js');

<>
  <div className="u-margin-bottom">
    <Table tableId="3" columns={TABLE_MOCK_COLUMNS()} rows={TABLE_MOCK_ROWS.slice(0, 4)} striped={false} />
  </div>

  <div className="u-margin-bottom">
    <Table tableId="4" columns={TABLE_MOCK_COLUMNS()} rows={TABLE_MOCK_ROWS.slice(0, 2)} type="primary" />
  </div>

  <Table tableId="5" columns={TABLE_MOCK_COLUMNS()} rows={TABLE_MOCK_ROWS.slice(0, 2)} type="secondary" />
</>
```
