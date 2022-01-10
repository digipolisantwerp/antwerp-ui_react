import classnames from "classnames";
import React, { useState } from "react";

import { TextField, Checkbox, Select, Datepicker, TelephoneNumber } from '../../../../form';
import Button from '../../../../button';
import FlyoutButton from '../../../../flyout-button';

const Filter = ({
  filters,
  columns,
  extraFilterMessage,
  columnOrderChanged,
  columnVisibilityChanged,
  filtersChanged,
  disableColumnSorting
}) => {
  const genericFilter = filters.find((filter) => filter.display === 'generic');
  const restFilters = filters.filter((filter) => filter.display !== 'generic');

  const [extraFiltersOpen, setExtraFiltersOpen] = useState(false);

  const renderFilter = (filter, isGeneric) => {
    switch(filter.type) {
      case "select":
        return (
          <Select
            label={filter.label}
            id={filter.id}
            name={filter.id}
            options={filter.options}
            value={filter.value}
            onChange={(e) => handleFilter(filter.id, e.target.value)}
            size={isGeneric ? "medium" : "small"}
          />
        );
      case "datepicker":
        return (
          <Datepicker
            label={filter.label}
            id={filter.id}
            name={filter.id}
            value={filter.value}
            onChange={(e) => handleFilter(filter.id, e.target.value)}
            size={isGeneric ? "medium" : "small"}
          />
        );
      case "telephone-number":
        return (
          <TelephoneNumber
            label={filter.label}
            id={filter.id}
            name={filter.id}
            value={filter.value}
            onChange={(value) => handleFilter(filter.id, value)}
            size={isGeneric ? "medium" : "small"}
          />
        );
      default:
        return (
          <TextField
            label={filter.label}
            id={filter.id}
            name={filter.id}
            placeholder={filter.placeholder}
            value={filter.value}
            onChange={(e) => handleFilter(filter.id, e.target.value)}
            size={isGeneric ? "medium" : "small"}
          />
        );
    }
  }

  const handleColumnOrderChange = (columnIndex, direction) => {
    const tempColumns = columns;
    const selectedColumn = columns[columnIndex];
    tempColumns.splice(columnIndex, 1);
    tempColumns.splice(direction === 'up' ? columnIndex - 1 : columnIndex + 1, 0, selectedColumn);

    columnOrderChanged(tempColumns);
  }

  const handleColumnVisibilityChange = (columnIndex) => {
    const tempColumns = columns;
    tempColumns[columnIndex].visible = !tempColumns[columnIndex].visible;
    columnVisibilityChanged(tempColumns);
  }

  const handleFilter = (fieldName, value) => {
    filtersChanged({
      ...filters.reduce((acc, filter) => !!filter.value ? ({
        ...acc,
        [filter.id]: filter.value
      }) : acc, {}),
      [fieldName]: value
    })
  }

  if (!genericFilter && !restFilters.length && disableColumnSorting) {
    return <></>;
  }

  return (
    <div className="m-table-filter">
      <div className="m-table-filter__top-bar">
        {genericFilter && (
          <div className="m-table-filter__generic-filter">
            {renderFilter(genericFilter, true)}
          </div>
        )}
        {!!restFilters.length && (
          <Button
            iconRight={extraFiltersOpen ? "ai-arrow-up-1" : "ai-arrow-down-1"}
            onClick={() => setExtraFiltersOpen(!extraFiltersOpen)}
            className="u-margin-left-xs"
            outline
          >
            {extraFilterMessage}
          </Button>
        )}
        {!disableColumnSorting && (
          <FlyoutButton icon="ai-layout-column" className="m-table-filter__column-selector" flyoutHasPadding outline flyoutDirection="right" flyoutSize="small">
            {columns.map((column, i) => (
              <div className="m-table-column-selector" key={i}>
                <Checkbox
                  label={column.label}
                  id={column.value}
                  name={column.label}
                  checked={column.visible}
                  onChange={() => handleColumnVisibilityChange(i)}
                />
                <div className="m-table-column-selector__order">
                  <Button
                    icon="ai-arrow-up-1"
                    size="small"
                    negative
                    disabled={i === 0}
                    onClick={() => handleColumnOrderChange(i, 'up')}
                  />
                  <Button
                    icon="ai-arrow-down-1"
                    size="small"
                    negative
                    disabled={i === columns.length - 1}
                    onClick={() => handleColumnOrderChange(i, 'down')}
                  />
                </div>
              </div>
            ))}
          </FlyoutButton>
        )}
      </div>
      <div className={classnames({
        'm-table-filter__optional-filters': true,
        'm-table-filter__optional-filters--open': extraFiltersOpen,
      })}>
        {restFilters.map((filter) => renderFilter(filter))}
      </div>
    </div>
  )
};

export default Filter;
