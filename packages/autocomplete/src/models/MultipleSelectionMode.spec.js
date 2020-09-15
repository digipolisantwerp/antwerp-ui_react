import {MultipleSelectionMode} from "./MultipleSelectionMode";
import Autocomplete from "../component/Autocomplete.jsx";
import * as sinon from 'sinon';


describe('Multiple Selection Mode Test', () => {
  let component;
  let mode;

  beforeEach(() => {
    component = sinon.createStubInstance(Autocomplete);
    component.state = {selection: []};
    component.props = {};
    mode = new MultipleSelectionMode(component);
  });
  it('should select item with empty selection', () => {
    mode.select({label: "A", value: "a"});
    expect(component.setState.withArgs({selection: [{label: "A", value: 'a'}]}).calledOnce).toBe(true);
  });

  it('should handle defaultValue', () => {
    component.state.results = [{label: "A", value: 'a'}];
    mode.handleDefaultValue(['a']);
    expect(component.setState.withArgs({selection: [{label: "A", value: 'a'}]}).calledOnce).toBe(true);
  });

  it('should handle wrong defaultValue', () => {
    component.state.results = [{label: "A", value: 'a'}];
    mode.handleDefaultValue('a');
    expect(component.setState.withArgs({selection: [{label: "A", value: 'a'}]}).calledOnce).toBe(true);
  });

  it('should select item with filled selection', () => {
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

  it('should unselect item with empty selection', () => {
    mode.unselect({label: 'A', value: 'a'});
    expect(component.setState.called).toBe(false);
  });

  it('should unselect item with filled selection', () => {
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
