// @flow
import React, { Fragment, useState } from 'react';
import classnames from 'classnames';

import TableLoader from './components/TableLoader';
import TableHeader from './components/TableHeader';
import TableRow from './components/TableRow';
import TableCell from './components/TableCell';
import { getCellProps, getHeaderProps } from './helpers/Table.helpers';
import Filter from './components/Filter';
import { DEFAULT_PAGINATION_OPTIONS } from './constants/Table.constants';

import { Select } from '../../form';
import Pagination from '../../pagination';

import './Table.scss';

type Props = {
  tableId: string,
  className?: string,
  rows: object[],
  columns: Array<string | {
    name: string,
    target: string,
    active?: boolean,
    disabled?: boolean
  }>,
  filters: Array<string | {
    id: string,
    display?: 'generic',
    type: string,
    label: string,
    placeholder: string,
    options?: {
      id: string,
      label: string
    }[],
  }>,
  paginationOptions?: {
    value: string,
    label: string
  }[],
  loading: boolean,
  responsive: boolean,
  saveFilters?: boolean,
  saveColumns?: boolean,
  saveSorting?: boolean,
  fixed: string,
  hasClickAction: string,
  sorting: {
    key: string,
    order: string
  },
  filtersChanged?: Function,
  sortingChanged?: Function,
  rowClicked?: Function,
  paginationChanged?: Function,
  striped?: boolean,
  disableColumnSorting?: boolean,
  type?: string,
  loadDataMessage: string,
  noColumnsMessage: string,
  noDataMessage: string,
  extraFilterMessage: string,
  perPageMessage: string,
  ofMessage: string,
  itemsPerPage: number,
  currentPage: number,
  totalItems: number
};

const Table = ({
  tableId,
	className,
	tableClassName,
	rows = [],
	columns = [],
	loading = false,
	responsive = true,
	fixed = false,
	hasClickAction = false,
	sorting,
	sortingChanged,
  filtersChanged,
	rowClicked,
  paginationChanged,
	striped = true,
  saveFilters = false,
  saveColumns = true,
  disableColumnSorting = false,
	type,
	draggable = false,
  paginationOptions = DEFAULT_PAGINATION_OPTIONS,
	loadDataMessage = 'Loading data...',
	noColumnsMessage = 'No columns available.',
	noDataMessage = 'No data available.',
  extraFilterMessage = 'Extra filters',
  perPageMessage = 'Items per page',
  ofMessage = 'of',
  filters = [],
  itemsPerPage,
  currentPage,
  totalItems
}: Props) => {
  const [savedColumns, setSavedColumns] = useState(
    localStorage.getItem(`antwerp-ui_table_columns_${tableId}`)
     ? JSON.parse(localStorage.getItem(`antwerp-ui_table_columns_${tableId}`))
     : []
  );
  const [savedFilters, setSavedFilters] = useState(
    localStorage.getItem(`antwerp-ui_table_filters_${tableId}`)
     ? JSON.parse(localStorage.getItem(`antwerp-ui_table_filters_${tableId}`))
     : {}
  );

	const hasCols = !loading && columns.length > 0;
	const hasData = !loading && rows.length > 0;
	const showPlaceholder = (!hasCols || !hasData) && !loading;
	const showLoader = !!loading;

  const mappedColumns = columns.reduce((acc, column) => {
    const savedColumnIndex = savedColumns.findIndex((x) => x.id === column.id);

    if (savedColumnIndex === -1) {
      acc.push({
        ...column,
        visible: true
      });
      return acc;
    }

    const savedColumn = savedColumns[savedColumnIndex];
    acc.splice(savedColumnIndex, 0, {
      ...column,
      visible: savedColumn.visible !== undefined ? savedColumn.visible : true
    });

    return acc;
  }, []);

  const mappedFilters = filters.map((filter) => ({
    ...filter,
    value: savedFilters[filter.id] || undefined
  }))

  const onRowClick = (rowData) => {
		if (hasClickAction && rowClicked) {
			rowClicked(rowData);
		}
	};

	const onSortClick = (key, order) => {
		if (sortingChanged) {
			sortingChanged({ key, order });
		}
	};

  const handleColumnsChanged = (newColumns) => {
    localStorage.setItem(`antwerp-ui_table_columns_${tableId}`, JSON.stringify(newColumns))
    setSavedColumns(newColumns)
  }

  const handleFiltersChanged = (newFilters) => {
    if (saveFilters) {
      localStorage.setItem(`antwerp-ui_table_filters_${tableId}`, JSON.stringify(newFilters))
    }

    if (filtersChanged) {
      filtersChanged(newFilters)
    }

    setSavedFilters(newFilters)
  }

	const renderLoader = () => <TableLoader loadDataMessage={loadDataMessage} />;

  const renderTableRow = (row, rowIndex, level, isLast) => {
		return (
			<Fragment key={`table-row-${level}-${rowIndex}`}>
				<TableRow
					className={classList && classList.row ? classList.row : '')}
					hasClickAction={hasClickAction}
					onClick={() => onRowClick(row)}
					level={level}
					isLast={isLast}
				>
					{mappedColumns.filter((column) => column.visible).map((col) => (
						<TableCell {...getCellProps(col, row, rowIndex)} />
					))}
				</TableRow>
				{row?.rows?.length
					? row.rows.map((subRow, subRowIndex) => renderTableRow(
						subRow,
						subRowIndex,
						level + 1,
						row.rows.length - 1 === subRowIndex,
					))
					: null}
			</Fragment>
		);
	};

  return (
    <>
      <Filter
        filters={mappedFilters}
        columns={mappedColumns}
        extraFilterMessage={extraFilterMessage}
        columnOrderChanged={handleColumnsChanged}
        columnVisibilityChanged={handleColumnsChanged}
        filtersChanged={handleFiltersChanged}
        disableColumnSorting={disableColumnSorting}
      />
      <div className={classnames(className, { 'a-table__wrapper-responsive': responsive })}>
        <table
          className={classnames('a-table', tableClassName, {
            'a-table--draggable': draggable,
            'a-table--striped': striped,
            'a-table--fixed': fixed,
            [`a-table--${type}`]: type,
          })}
        >
          {mappedColumns.length > 0 && (
            <thead>
              <TableRow>
                {mappedColumns.filter((column) => column.visible).map((col, index) => (
                  <TableHeader {...getHeaderProps(col, sorting, onSortClick, index)} />
                ))}
              </TableRow>
            </thead>
          )}
          <tbody>
            {showLoader ? renderLoader() : rows.map((row, index) => renderTableRow(row, index))}
          </tbody>
        </table>
      </div>
      {currentPage && totalItems && currentPage && (
        <div className="m-table-pagination">
          <Select
            inline={true}
            placeholder={itemsPerPage}
            options={paginationOptions}
            onChange={(e) => paginationChanged({
              currentPage,
              itemsPerPage: parseInt(e.target.value),
              totalItems,
            })}
          />
          <p className="u-margin-left-xs">{perPageMessage} | {(currentPage - 1) * itemsPerPage + 1} - {(currentPage - 1) * itemsPerPage + itemsPerPage} {ofMessage} {totalItems}</p>
          <Pagination
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalValues={totalItems}
            styling="m-pagination--outline"
            display="numbers"
            buttonType="button"
            onUpdate={n => paginationChanged({
              currentPage: n,
              itemsPerPage,
              totalItems,
            })}
          />
        </div>
      )}
    </>
  );
}

export default Table;
