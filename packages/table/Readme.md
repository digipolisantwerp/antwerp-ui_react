
### Full example
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

### Filter examples
Filters values:

| Key         | Value                                                     | Description                                                      |
|-------------|-----------------------------------------------------------|------------------------------------------------------------------|
| id          | _string_                                                  | ID to identify the filter when returning data                    |
| display     | "generic" / "optional"                                    | "generic" to show as the main filter, "optional" if the filter should appear under the extra filter dropdown |
| type        | "input" / "datepicker" / "select" / "telephone-number"    | Type of field to show                                            |
| label       | _string_                                                  | Label of the field                                               |
| placeholder | _string_                                                  | Placeholder of the field                                         |
| options     | _{ id: string; label: string; }[]_                        | Options to use if "select" type                                  |

Table with only 1 `generic` filter:
```js static
const FILTERS = [{
  id: "smartfilter",
  display: "generic",
  type: "input",
  label: "Zoek op voornaam",
  placeholder: "Zoek op voornaam",
}]
```

```js
const { TABLE_MOCK_COLUMNS, TABLE_MOCK_ROWS, TABLE_MOCK_NESTED_ROWS, TABLE_MOCK_FILTER } = require('./src/mocks/Table.mock.js');

<Table
  tableId="1"
  columns={TABLE_MOCK_COLUMNS()}
  rows={TABLE_MOCK_ROWS.slice(0, 2)}
  filters={[{
    id: "smartfilter",
    display: "generic",
    type: "input",
    label: "Zoek op voornaam",
    placeholder: "Zoek op voornaam",
  }]}
/>
```

Only optional filters:
```js static
const FILTERS = [{
  id: "firstName",
  type: "input",
  label: "Zoek op voornaam",
  placeholder: "Zoek op voornaam",
}, {
  id: "lastName",
  type: "input",
  label: "Zoek op achternaam",
  placeholder: "Zoek op achternaam",
}]
```

```js
const { TABLE_MOCK_COLUMNS, TABLE_MOCK_ROWS, TABLE_MOCK_NESTED_ROWS, TABLE_MOCK_FILTER } = require('./src/mocks/Table.mock.js');

<Table
  tableId="1"
  columns={TABLE_MOCK_COLUMNS()}
  rows={TABLE_MOCK_ROWS.slice(0, 2)}
  filters={[{
    id: "firstName",
    type: "input",
    label: "Zoek op voornaam",
    placeholder: "Zoek op voornaam",
  }, {
    id: "lastName",
    type: "input",
    label: "Zoek op achternaam",
    placeholder: "Zoek op achternaam",
  }]}
/>
```

### State examples
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

Extra table actions
```js
const { TABLE_MOCK_COLUMNS, TABLE_MOCK_ROWS, TABLE_MOCK_FILTER } = require('./src/mocks/Table.mock.js');
const Button = require('../button').default;

<Table
  tableId="5"
  columns={TABLE_MOCK_COLUMNS()}
  rows={TABLE_MOCK_ROWS.slice(0, 2)}
  extraTableActions={(
    <Button icon="ai-pencil-1" className="u-margin-right-xs" />
  )}
  filters={TABLE_MOCK_FILTER}
/>
```
