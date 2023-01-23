import { fireEvent, render, screen } from '@testing-library/react';
import { Table } from './Table';
import { TableColumnSchema, TableRowSchema } from './Table.types';
import jest from 'jest-mock';

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
    price: '€1,99'
  }
];

describe('UI Components - Atoms - Table', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Table />);
    expect(baseElement).toBeTruthy();
  });

  it('should render the columns and rows', () => {
    render(<Table columns={COLUMNS_EXAMPLE} rows={ROWS_EXAMPLE} />);
    expect(screen.getByText('Snack')).toBeTruthy();
    expect(screen.getByText('Description')).toBeTruthy();
    expect(screen.getByText('Stock')).toBeTruthy();
    expect(screen.getByText('Ice cream')).toBeTruthy();
    expect(screen.getByText('Chips')).toBeTruthy();
  });

  it('should render the ascending sort', () => {
    render(<Table columns={COLUMNS_EXAMPLE} rows={ROWS_EXAMPLE} sort={'snack'} sortDirection={'ascending'} />);
    expect(screen.getByText('Snack').parentElement?.getAttribute('aria-sort')).toEqual('ascending');
  });

  it('should render the ascending sort', () => {
    render(<Table columns={COLUMNS_EXAMPLE} rows={ROWS_EXAMPLE} sort={'snack'} sortDirection={'descending'} />);
    expect(screen.getByText('Snack').parentElement?.getAttribute('aria-sort')).toEqual('descending');
  });

  it('should render the sortable columns', () => {
    render(<Table columns={COLUMNS_EXAMPLE} rows={ROWS_EXAMPLE} selectable={true} />);
    expect(screen.getAllByRole('button').length).toEqual(2);
  });

  it('should render checkboxes', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    render(<Table columns={COLUMNS_EXAMPLE} rows={ROWS_EXAMPLE} selectable={true} selected={false} />);
    expect(screen.getAllByRole('checkbox').length).toEqual(3);
  });

  it('should select the select all checkbox', () => {
    render(<Table columns={COLUMNS_EXAMPLE} selected={['0', '1']} rows={ROWS_EXAMPLE} selectable={true} />);
    expect(screen.getAllByRole('checkbox')[0].getAttribute('checked')).toEqual('');
  });

  it('should not select the select all checkbox', () => {
    render(<Table columns={COLUMNS_EXAMPLE} selected={['0']} rows={ROWS_EXAMPLE} selectable={true} />);
    expect(screen.getAllByRole('checkbox')[0].getAttribute('checked')).toEqual(null);
  });

  it('should render the action buttons', () => {
    const mockOnClick = jest.fn();
    render(
      <Table
        columns={COLUMNS_EXAMPLE}
        rows={ROWS_EXAMPLE}
        selectable={true}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        actions={{ label: 'Actions', buttons: [{ label: 'Buy', id: 'buy', onActionClick: mockOnClick }, null] }}
      />
    );
    expect(screen.getAllByText('Actions').length).toEqual(1);
    expect(screen.getAllByText('Buy')[0].toString()).toContain('HTMLButtonElement');
    fireEvent.click(screen.getAllByText('Buy')[0]);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('should render the scroll wrapper', () => {
    const { container } = render(<Table columns={COLUMNS_EXAMPLE} responsive />);
    const scrollContainers = container.getElementsByClassName('a-table-scrollable-wrapper');
    expect(scrollContainers.length).toEqual(1);
    const scrollContainer = scrollContainers[0];
    fireEvent.scroll(scrollContainer, { target: { scrollLeft: 10 } });
    fireEvent(window, new Event('resize'));
  });

  it('should call onSelect and onSelectAll', () => {
    const mockOnSelect = jest.fn();
    const mockOnSelectAll = jest.fn();
    render(
      <Table
        onSelect={mockOnSelect}
        onSelectAll={mockOnSelectAll}
        columns={COLUMNS_EXAMPLE}
        rows={ROWS_EXAMPLE}
        selectable
      />
    );
    fireEvent.click(screen.getAllByRole('checkbox')[0]);
    fireEvent.click(screen.getAllByRole('checkbox')[1]);
    expect(mockOnSelect).toHaveBeenCalledTimes(1);
    expect(mockOnSelectAll).toHaveBeenCalledTimes(1);
  });

  it('should call onSortClick', () => {
    const mockOnClick = jest.fn();
    render(<Table onSortClick={mockOnClick} columns={COLUMNS_EXAMPLE} rows={ROWS_EXAMPLE} selectable />);
    fireEvent.click(screen.getAllByRole('button')[0]);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
