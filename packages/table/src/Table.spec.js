import Table from "./Table";
import { mount } from 'enzyme';
import React from 'react';
import { TABLE_MOCK_COLUMNS, TABLE_MOCK_ROWS, TABLE_MOCK_NESTED_ROWS, TABLE_MOCK_FILTER } from './mocks/Table.mock.js';
import * as sinon from 'sinon';

describe('Table Test', () => {
  let component: Table;

  describe('Setup and Teardown', () => {
    test('Should create a valid component', () => {
      const component = mount(
        <Table />
      );

      expect(component).toBeDefined();
    });

    test('Should set an initial state', () => {
      const component = mount(
        <Table
          tableId="1"
          columns={TABLE_MOCK_COLUMNS()}
          rows={TABLE_MOCK_ROWS.slice(0, 10)}
        />
      );

      expect(component).toBeDefined();
    });
  });

  describe('Data', () => {
    test('Should render data', () => {
      const component = mount(
        <Table
          tableId="1"
          columns={TABLE_MOCK_COLUMNS()}
          rows={TABLE_MOCK_ROWS.slice(0, 10)}
        />
      );

      expect(component.find('tbody tr').length).toBe(10);
    });
  });

  describe('Filters', () => {
    test('Should render generic filter', () => {
      const component = mount(
        <Table
          tableId="1"
          columns={TABLE_MOCK_COLUMNS()}
          rows={TABLE_MOCK_ROWS.slice(0, 10)}
          filters={TABLE_MOCK_FILTER}
        />
      );

      expect(component.find(`input[name="${TABLE_MOCK_FILTER[0].id}"]`).props()).toHaveProperty('id', TABLE_MOCK_FILTER[0].id);
    });

    test('Should render optional filters', () => {
      const component = mount(
        <Table
          tableId="1"
          columns={TABLE_MOCK_COLUMNS()}
          rows={TABLE_MOCK_ROWS.slice(0, 10)}
          filters={TABLE_MOCK_FILTER}
        />
      );

      expect(component.find(`.m-table-filter__optional-filters > *`).length).toBe(4);
    });
  });

  describe('Pagination', () => {
    test('Should render pagination', () => {
      const component = mount(
        <Table
          tableId="1"
          columns={TABLE_MOCK_COLUMNS()}
          rows={TABLE_MOCK_ROWS.slice(0, 10)}
          itemsPerPage={10}
          totalItems={1723}
          currentPage={1}
        />
      );

      expect(component.find(`.m-pagination`)).toBeDefined()
    });
  });
});
