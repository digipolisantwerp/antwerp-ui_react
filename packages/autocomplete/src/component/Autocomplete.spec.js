import Autocomplete from "./Autocomplete.jsx";
import * as sinon from 'sinon';

describe('Autocomplete Test', () => {
  let component: Autocomplete;
  describe('Setup and Teardown', () => {
    test('should create a valid component', () => {
      component = new Autocomplete({});
      expect(component).toBeDefined();
    });
    test('Should set an initial state', () => {
      component = new Autocomplete({});
      expect(component.state).toEqual({
        open: false,
        results: [],
        cursor: 0,
        selection: [],
        defaultValue: ''
      });
    });
    test('Initialize formcontrol', () => {
      component = new Autocomplete({
        defaultValue: 'some value'
      });
    });
  });
  describe('Modes', () => {
    test('Setup multi select mode', () => {
      component = new Autocomplete({});
      expect(component.selectionMode.constructor.name).toBe('SingleSelectionMode');
    });
    test('Setup single select mode', () => {
      component = new Autocomplete({
        multipleSelect: true
      });
      expect(component.selectionMode.constructor.name).toBe('MultipleSelectionMode');
    });
    test('Setup Sync Search mode', () => {
      component = new Autocomplete({});
      expect(component.searchMode.constructor.name).toBe('SyncSearchMode');
    });
    test('Setup Async test mode', () => {
      component = new Autocomplete({
        asyncItems: sinon.stub()
      });
      expect(component.searchMode.constructor.name).toBe('AsyncSearchMode');
    });
  })
});
