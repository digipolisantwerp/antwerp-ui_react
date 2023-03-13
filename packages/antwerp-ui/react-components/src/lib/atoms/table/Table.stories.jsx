import Table from './Table';
import { QA_PROP_STORY } from '../../../constants/stories.settings';

const COLUMNS_EXAMPLE = [
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

const ROWS_EXAMPLE = [
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

//   actions,

export default {
  title: 'React/Atoms/Table',
  component: Table,
  parameters: {
    docs: {
      description: {
        component:
          'Use the table component to make information easier to scan, compare and sort for users. Tables are meant for: showing sequential or structured data and helping users find specific information within a large data set.'
      }
    }
  },
  argTypes: {
    rows: {
      control: { type: 'object' },
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: '[]' }
      },
      description:
        'The rows parameter contains the data for the table rows. Every row should have an UNIQUE `id`. The row data values are mapped to the `value` fields of columns.'
    },
    columns: {
      control: { type: 'object' },
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '[]' }
      },
      description:
        'The columns parameter contains the data for the table columns. The `value` fields are used to read the data from the rows. All the fields are: `label`, `value`, `alignRight`, `dataType` and `sortable`.'
    },
    striped: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description:
        'Controls whether the table should have zebra striping, which equips uneven data rows with a light grey background.'
    },
    selectable: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description:
        'The header and data rows can also be configured with leading checkbox components, which allow for the selection of one, multiple or all rows.'
    },
    selected: {
      control: { type: 'object' },
      if: { arg: 'selectable', truthy: true },
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: [] }
      },
      description: 'Array of row `ids` to indicate which checkboxes in the `Table` have the checked state.'
    },
    open: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      description:
        'An open table removes the most outward borders of the table, providing a slightly lighter visual style. (Not applicable if `responsive` is set to true.'
    },
    small: {
      defaultValue: false,
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      description:
        'The theme table with reduced padding can only be used in a setting where much data needs to be displayed in a limited space, such as a technical dashboard.'
    },
    size: {
      defaultValue: 'small',
      control: { type: 'select' },
      options: ['', 'small', 'medium', 'large'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'small' }
      },
      description:
        'The `size` prop controls the size for action buttons if they are available in the `Table` component. Can be omitted for `small`.'
    },
    sort: {
      defaultValue: 'description',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description:
        'Current sort of the `Table`, this prop expects a column `value`. Will render the sortable header accordingly.'
    },
    sortDirection: {
      defaultValue: 'descending',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description:
        'Current sort direction of the `Table`, `ascending` or `descending`. Will render the sortable header accordingly.'
    },
    responsive: {
      control: { type: 'boolean' },
      defaultValue: true,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description:
        'Controls whether the `Table` component should be responsive. If set to `true` a horizontal scrollbar is added to the table when not enough space is available.'
    },
    fixedColumnRight: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'When a table is responsive, a column can be frozen to the right side.'
    },
    fixedColumnLeft: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'When a table is responsive, a column can be frozen to the left side.'
    },
    onSelect: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      description:
        'Function that is triggered when a row is selected via a checkbox/row click. The first argument is the `id` of the row.'
    },
    onSelectAll: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      description: 'Function that is triggered when the select all checkbox in the header is clicked.'
    },
    onSortClick: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      description:
        'Function that is triggered when a sortable header button is clicked. The first argument is of type `MouseEvent` and the second one is the column `value`.'
    },
    id: {
      control: { type: 'text' },
      defaultValue: 'example-table',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'aui-table' }
      },
      description:
        'The `id` prop allows to set the `id` attribute on the rendered HTML table component. It is used to uniquely identify checkboxes and buttons within a'
    },
    actions: {
      control: { type: 'object' },
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{}' }
      },
      description:
        'Table cells can also contain buttons, placed at the far right of a data row. The `actions` prop expect an optional `label` as column header and an array of `Button` properties. Two extra prop have been added: `label` to define the button label and `onActionClick` which append the row `id` as second argument to the normal button `onClick` behavior.'
    },
    qa: QA_PROP_STORY
  }
};

const Template = ({ ...args }) => <Table {...args} />;

export const table = Template.bind({});
table.args = {
  rows: ROWS_EXAMPLE,
  columns: COLUMNS_EXAMPLE,
  selected: ['0', '1'],
  actions: {
    label: 'Acties',
    buttons: [
      { label: 'Kopen', id: 'buy' },
      {
        label: 'Verwijder',
        id: 'delete',
        theme: 'danger',
        iconLeft: 'close'
      }
    ]
  }
};
