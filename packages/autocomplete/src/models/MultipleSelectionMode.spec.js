import {MultipleSelectionMode} from "./MultipleSelectionMode";
import Autocomplete from "../component/Autocomplete.jsx";
import * as sinon from 'sinon';

let component;
let mode;

function beforeEach() {
  component = sinon.createStubInstance(Autocomplete);
  component.state = {selection: []};
  component.props = {};
  mode = new MultipleSelectionMode(component);
}

describe('Multiple Selection Mode', () => {
  test('select item with empty selection', () => {
    beforeEach();
    mode.select({label: "A", value: "a"});
    expect(component.setState.withArgs({selection: [{label: "A", value: 'a'}]}).calledOnce).toBe(true);
  });

  test('handle defaultValue', () => {
    beforeEach();
    component.state.results = [{label: "A", value: 'a'}]
    mode.handleDefaultValue(['a']);
    expect(component.setState.withArgs({selection: [{label: "A", value: 'a'}]}).calledOnce).toBe(true);
  });

  test('handle wrong defaultValue', () => {
    beforeEach();
    component.state.results = [{label: "A", value: 'a'}]
    mode.handleDefaultValue('a');
    expect(component.setState.withArgs({selection: [{label: "A", value: 'a'}]}).calledOnce).toBe(true);
  });

  test('select item with filled selection', () => {
    beforeEach();
    component.state = {selection: [{label: 'A', value: 'a'}]};
    mode.select({label: 'B', value: 'b'});
    expect(component.setState.withArgs({
      selection: [{
        label: 'A',
        value: 'a'
      }, {
        label: 'B',
        value: 'b'
      }]
    }).calledOnce).toBe(true);
  });

  test('unselect item with empty selection', () => {
    beforeEach();
    mode.unselect({label: 'A', value: 'a'});
    expect(component.setState.called).toBe(false);
  });

  test('unselect item with filled selection', () => {
    beforeEach();
    component.state = {selection: [{label: 'A', value: 'a'}, {label: 'B', value: 'b'}]};
    mode.unselect({label: 'A', value: 'a'});
    expect(component.setState.withArgs({
      selection: [{
        label: 'B',
        value: 'b'
      }]
    }).calledOnce).toBe(true);
  });
});
